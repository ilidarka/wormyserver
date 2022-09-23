CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	userName CHARACTER VARYING(255) UNIQUE NOT NULL,
	userEmail CHARACTER VARYING(255) UNIQUE NOT NULL,
	userPassword CHARACTER VARYING(255) NOT NULL,
	userRole CHARACTER VARYING(30) DEFAULT 'USER',
	userScore INTEGER DEFAULT 0,
	CHECK((userName != '') AND (userEmail != '') AND (userPassword != ''))
);
INSERT INTO users (userName, userEmail, userPassword, userRole) VALUES ('admin', 'admin@admin.com', 'admin', 'ADMIN');
INSERT INTO users (userName, userEmail, userPassword, userRole) VALUES ('user', 'user@user.com', 'user', 'USER');