SELECT
  TaskId,
  Title,
  Description,
  Deadline,
  Priority,
  Status
FROM
  Tasks
WHERE
  UserId = ?
