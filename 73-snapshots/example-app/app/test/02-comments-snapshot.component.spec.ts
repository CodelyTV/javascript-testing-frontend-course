import { waitFor, render, screen } from '@testing-library/angular';
import { CommentsComponent } from '../components/comments.component';
import { CommentComponent } from '../components/comment.component';
import { CommentRepositoryService } from '../services/CommentRepository.service';

describe('Comments component', () => {
  it('should render the list of comments', async () => {
    const { container } = await render(CommentsComponent, {
      declarations: [CommentComponent],
      componentProviders: [
        {
          provide: CommentRepositoryService,
          useValue: {
            async getAll() {
              return await [
                {
                  id: 1,
                  date: '2020-01-01',
                  content: 'Lorem ipsum',
                  user: {
                    id: 1,
                    name: 'Núria',
                    avatar: './nuria.png',
                  },
                },
              ];
            },
          },
        },
      ],
    });

    await screen.findAllByRole('article');

    expect(container).toMatchInlineSnapshot(`
      <div
        id="root0"
      >
        <comment>
          <article
            class="comment"
          >
            <div
              class="comment__info"
            >
              <img
                alt="Núria"
                class="comment__avatar"
                src="./nuria.png"
              />
               Wed Jan 01 2020 —  
              <em>
                <strong>
                  Núria
                </strong>
                 said: 
              </em>
            </div>
             Lorem ipsum 
          </article>
        </comment>
        
      </div>
    `);
  });
});
