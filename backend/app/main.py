from fastapi import FastAPI
from app.services.betting_engine import generate_bets

app = FastAPI()

@app.get("/bets")
def get_bets():
    return {"bets": generate_bets()}