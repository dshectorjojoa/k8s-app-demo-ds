from fastapi import FastAPI
import os
from sqlalchemy import create_engine, MetaData

app = FastAPI()
visits = 0

DB_URL = os.getenv("DATABASE_URL", "sqlite:///./test.db")
engine = create_engine(DB_URL)
metadata = MetaData()

@app.get("/")
def read_root():
    global visits
    visits += 1
    return {"message": "Hola Mundo", "visits": visits}
