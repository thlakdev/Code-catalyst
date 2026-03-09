import google.generativeai as genai

genai.configure(api_key="AIzaSyAVlz4i42U8zSun12hUX6VqLRm1ln450xU")

with open("models.txt", "w", encoding="utf-8") as f:
    for m in genai.list_models():
        if 'generateContent' in m.supported_generation_methods:
            f.write(m.name + "\n")
