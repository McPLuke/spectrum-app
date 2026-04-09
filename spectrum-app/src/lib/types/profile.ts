// This file defines the Profile interface, which represents a user's profile in the application.
export interface Profile {
  id: string
  displayName: string
  pronouns?: string
  bio?: string
  isPublic: boolean
}