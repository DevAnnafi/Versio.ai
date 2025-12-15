// src/types/database.ts

export type Prompt = {
    id: string
    user_id: string
    title: string
    content: string
    created_at: string
    updated_at: string
  }
  
  export type PromptVersion = {
    id: string
    prompt_id: string
    content: string
    created_at: string
  }