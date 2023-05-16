import React from 'react';
import classNames from 'classnames';

import { Todo } from '../../Type/Todo';
import { UserInfo } from '../UserInfo';

interface Props {
  todo: Todo;
}

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  return (
    <article
      data-id="1"
      className={classNames(
        'TodoInfo', { 'TodoInfo--completed': todo.completed },
      )}
    >

      <h2 className="TodoInfo__title">{todo.title}</h2>

      <a className="UserInfo" href="mailto:Sincere@april.biz">
        {todo.user && <UserInfo user={todo.user} />}
      </a>
    </article>
  );
};
