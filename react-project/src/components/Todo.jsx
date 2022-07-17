import React from "react";

export const Todo = ({
  id,
  todo,
  deadline,
  is_done,
  user_id,
  created_at,
  updated_at,
}) => {
  return (
    <li key={id} id={id}>
      <p>
        {deadline} {todo} by {user_id} at {created_at} and {updated_at}
      </p>
    </li>
  );
}
