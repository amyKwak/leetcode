SELECT
  CASE
    WHEN duration < 5*60         THEN '[0-5>'
    WHEN duration < 10*60        THEN '[5-10>'
    WHEN duration < 15*60        THEN '[10-15>'
    ELSE '15 minutes or more'
  END AS bin,
  COUNT(*) AS total
FROM sessions
GROUP BY bin;

