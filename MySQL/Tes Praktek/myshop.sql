-- 1
create database myshop;

use myshop;

-- 2
create table categories(
		id int primary key auto_increment not null,
        nama varchar(100) not null
);

create table users(
	id int primary key auto_increment not null,
    nama varchar(100) not null,
    email varchar(100) not null,
    password varchar(100) not null
);

create table items(
	id int primary key auto_increment not null,
    nama varchar(100) not null,
    description TEXT not null,
    price decimal(15,2) not null,
    stock int,
    category_id int,
    user_id int,
    foreign key(category_id) references categories(id),
    foreign key(user_id) references users(id)
);

-- 3
insert into users
values
	(1, 'John Doe', 'john@doe.com', 'john123'),
	(2, 'Jane Doe', 'jane@doe.com', 'jane123'),
	(3, 'Alice', 'alice@example.com', 'alicepwd'),
	(4, 'Bob', 'bob@example.com', 'bobpws');
select * from users;
    
insert into categories
values
	(1, 'gadget'),
	(2, 'cloth'),
    (3, 'men'),
	(4, 'women'),
	(5, 'branded'),
	(6, 'electronics'),
	(7, 'fashion');
select * from categories;

insert into items
values
	(1, 'Sumsang b50', 'hape keren dari merek sumsang', 4000000, 100, 1, 1),
	(2, 'Uniklooh', 'baju keren dari brand ternama', 500000, 50, 2, 2),
	(3, 'IMHO Watch', 'jam tangan anak yang jujur banget', 2000000, 10, 1, 1),
	(4, 'Nike Shoes', 'sepatu olahraga nyaman dan stylish', 1500000, 70, 5, 3),
	(5, 'Apple Iphone', 'smartphone canggih dan populer', 12000000, 30, 6, 4),
	(6, 'Leather Jacket', 'jaket kulit untuk pria', 2500000, 15, 7, 3);
select * from items;

-- 4
select id, nama, email from users;

-- 5
select * from items
where price > 1000000;

-- 6 
select * from items
where nama like '%uniklo%'
	or nama like '%watch%'
    or nama like '%sang%';

-- atau

select * from items
where nama regexp 'uniklo|watch|sang';

-- 7 
update items
set price = 2500000 where nama = 'Sumsang b50';
select * from items;

-- 8 
select c.nama as "Category Name", count(i.category_id) as "Item Count" 
		-- ini count itu ngitung berapa banyak baris di tabel items yang punya category_id yang cocok dengan kategori tertentu
from categories as c
	join items as i
	on c.id = i.category_id
group by c.nama 
		-- dikelompokkin hasil berdasarkan kategori id sama nama biar count yg diatas diitungnya /kategori bukan keseluruhan
having count(i.category_id) > 1; 
		-- setelah dikelompokkin itu nantinya cuma kelompok yg jumlah itemnya lebih dari 1 aja 

-- 9
select u.nama as "Owner Name", round(avg(i.price)) as "AVG Price"
from users as u
	join items as i
	on u.id = i.user_id
group by u.nama;

-- 10
select i.nama as "Item Name", c.nama as "Category Name", u.nama as "Owner Name", i.stock
from users as u
	join items as i
	on u.id = i.user_id
	join categories as c
	on i.category_id = c.id
where i.stock < 20;

-- 11
select u.nama as "User Name", i.nama as "Item Name", i.stock as "Stock"
from users as u
	join items as i
	on u.id = i.user_id
where i.stock > 50
order by u.nama;

-- 12
select u.nama as "User Name", i.nama as "Item Name", round(i.price) as "Price"
from users as u
	join items as i
	on u.id = i.user_id
order by i.price desc
limit 1;

-- 13
select u.nama as "Owner Name", round(sum(i.price * i.stock)) as "Total Value"
from users as u
	join items as i
	on u.id = i.user_id
group by u.nama
order by sum(i.price * i.stock) desc;

-- atau

select u.nama as "Owner Name", round(sum(i.price * i.stock)) as "Total Value"
from users as u
	join items as i
	on u.id = i.user_id
group by u.nama
order by `Total Value` desc;

-- 14
create view view_item_details as
	select i.id, i.nama, i.description, i.price, i.stock ,
		   c.nama as 'category_name', u.nama as 'owner_name', u.email as 'owner_email'
    from users as u
		join items as i
		on u.id = i.user_id
		join categories as c
		on i.category_id = c.id;

-- 15 
select id as 'ID', nama as 'Product Name', description as 'Description', round(price) as 'Price', stock as 'Stock',
	   category_name as 'Category Name', owner_name as 'Owner Name', owner_email as 'Owner Email' 
	from view_item_details;

-- 16
select owner_name as 'Owner Name', sum(stock) as 'Total Stock'
	from view_item_details
    group by owner_name
    order by sum(stock) desc;
    
-- 17
select nama as 'Product Name', category_name as 'Category Name', owner_email as 'Owner Email'
	from view_item_details
    where price > 1000000;
    
-- 18
create view view_owner_stock as
	select u.nama, i.stock
    from users as u
		join items as i
		on u.id = i.user_id;
select nama as 'Owner Name', sum(stock) as 'Total Stock'
from view_owner_stock
group by nama;

-- 19
drop view if exists view_owner_stock;