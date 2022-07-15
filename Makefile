create:
	docker build -t course_img . 
run:
	docker run -d -p 8080:8080 --rm --name course_container course_img
stop:
	docker stop words_container