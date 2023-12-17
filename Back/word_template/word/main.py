from fastapi import FastAPI
from fastapi.responses import FileResponse
from word import generate_doc
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
    
@app.post("/download-doc")
async def doc_to_download(new_speciality, new_napr, new_level):
    await generate_doc(new_speciality=new_speciality, new_napr=new_napr, new_level=new_level)
    return FileResponse('finish.docx', headers={"Content-Disposition": f"attachment; filename=finish.docx"})