import { render } from '@testing-library/angular';
import { CommentComponent } from '../components/comment.component';

describe('Comment component', () => {
  it('should render a comment', async () => {
    const { container } = await render(CommentComponent, {
      componentProperties: {
        comment: {
          id: 1,
          date: '2020-01-01',
          content: 'Lorem ipsum',
          user: {
            id: 1,
            name: 'Núria',
            avatar: './nuria.png',
          },
        },
      },
    });

    expect(container).toMatchInlineSnapshot(`
      <div
        id="root0"
      >
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
      </div>
    `);
  });
});
