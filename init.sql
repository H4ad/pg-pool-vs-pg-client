CREATE TABLE transactions (
    person_id int NOT NULL,
    value int NOT NULL,
    type varchar(1) NOT NULL,
    description varchar(10) NOT NULL,
    created_at timestamp NOT NULL
);

CREATE INDEX idx_transactions_person_id ON transactions (person_id, created_at DESC);

do
$do$
declare
     i int;
begin
for  i in 1..10000
loop
    INSERT INTO transactions VALUES (1, i, 'd', 'Test', CURRENT_TIMESTAMP);
end loop;
end;
$do$;
