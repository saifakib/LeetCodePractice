# Write your MySQL query statement below
SELECT emp.name as EMPLOYEE FROM EMPLOYEE emp 
JOIN EMPLOYEE man
ON emp.managerId = man.id
WHERE emp.salary > man.salary