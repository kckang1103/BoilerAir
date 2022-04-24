from typing import Optional

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/users")
def get_users():
	return {"user1": "hello", "user2": "hi"} 
