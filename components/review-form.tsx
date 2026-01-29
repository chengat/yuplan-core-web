"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ThumbsUp, ThumbsDown, Star } from "lucide-react"
import { coursesApi, type SubmitReviewBody } from "@/lib/api/courses"

interface ReviewFormProps {
  courseCode: string
  courseName: string
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

export function ReviewForm({
  courseCode,
  courseName,
  isOpen,
  onClose,
  onSuccess,
}: ReviewFormProps) {
  const [email, setEmail] = useState("")
  const [authorName, setAuthorName] = useState("")
  const [liked, setLiked] = useState<boolean | null>(null)
  const [difficulty, setDifficulty] = useState<number>(0)
  const [realWorldRelevance, setRealWorldRelevance] = useState<number>(0)
  const [reviewText, setReviewText] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    // Validation
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address")
      return
    }

    if (liked === null) {
      setError("Please indicate if you liked this course")
      return
    }

    if (difficulty === 0) {
      setError("Please rate the difficulty")
      return
    }

    if (realWorldRelevance === 0) {
      setError("Please rate the real-world relevance")
      return
    }

    if (!reviewText.trim()) {
      setError("Please write a review")
      return
    }

    try {
      setIsSubmitting(true)

      const reviewData: SubmitReviewBody = {
        email: email.trim(),
        author_name: authorName.trim() || null,
        liked,
        difficulty,
        real_world_relevance: realWorldRelevance,
        review_text: reviewText.trim(),
      }

      await coursesApi.submitReview(courseCode, reviewData)

      // Reset form
      setEmail("")
      setAuthorName("")
      setLiked(null)
      setDifficulty(0)
      setRealWorldRelevance(0)
      setReviewText("")
      
      onSuccess()
      onClose()
    } catch (err) {
      console.error("Error submitting review:", err)
      setError(err instanceof Error ? err.message : "Failed to submit review. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    if (!isSubmitting) {
      setError(null)
      onClose()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add a Review for {courseName}</DialogTitle>
          <DialogDescription>
            Share your experience with this course
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Email */}
          <div>
            <label className="text-sm font-medium mb-2 block">
              Email <span className="text-destructive">*</span>
            </label>
            <Input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
            />
            <p className="text-xs text-muted-foreground mt-1">
              Your email will not be publicly displayed
            </p>
          </div>

          {/* Author Name (Optional) */}
          <div>
            <label className="text-sm font-medium mb-2 block">
              Your Name (optional)
            </label>
            <Input
              type="text"
              placeholder="Leave blank to post anonymously"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              disabled={isSubmitting}
            />
          </div>

          {/* Did you like this course */}
          <div>
            <label className="text-sm font-medium mb-3 block">
              Did you like this course? <span className="text-destructive">*</span>
            </label>
            <div className="flex gap-3">
              <Button
                type="button"
                variant={liked === true ? "default" : "outline"}
                size="lg"
                onClick={() => setLiked(true)}
                disabled={isSubmitting}
                className="flex-1"
              >
                <ThumbsUp className="mr-2 h-5 w-5" />
                Yes
              </Button>
              <Button
                type="button"
                variant={liked === false ? "default" : "outline"}
                size="lg"
                onClick={() => setLiked(false)}
                disabled={isSubmitting}
                className="flex-1"
              >
                <ThumbsDown className="mr-2 h-5 w-5" />
                No
              </Button>
            </div>
          </div>

          {/* Difficulty */}
          <div>
            <label className="text-sm font-medium mb-3 block">
              Difficulty (1 = Easy, 5 = Hard) <span className="text-destructive">*</span>
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setDifficulty(value)}
                  disabled={isSubmitting}
                  className="focus:outline-none focus:ring-2 focus:ring-primary rounded"
                >
                  <Star
                    className={`h-10 w-10 transition-colors ${
                      value <= difficulty
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Real-World Relevance */}
          <div>
            <label className="text-sm font-medium mb-3 block">
              Real-World Relevance <span className="text-destructive">*</span>
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setRealWorldRelevance(value)}
                  disabled={isSubmitting}
                  className="focus:outline-none focus:ring-2 focus:ring-primary rounded"
                >
                  <Star
                    className={`h-10 w-10 transition-colors ${
                      value <= realWorldRelevance
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Review Text */}
          <div>
            <label className="text-sm font-medium mb-2 block">
              Your Review <span className="text-destructive">*</span>
            </label>
            <Textarea
              placeholder="Share your experience..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              required
              disabled={isSubmitting}
              rows={4}
              className="resize-none"
            />
          </div>

          {/* Privacy Notice */}
          <p className="text-xs text-muted-foreground">
            Your review will be posted anonymously with a randomly generated name.
          </p>

          {/* Error Message */}
          {error && (
            <div className="bg-destructive/10 text-destructive px-4 py-3 rounded-md text-sm">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-red-600 hover:bg-red-700 text-white shadow-md hover:shadow-lg transition-all"
          >
            {isSubmitting ? "Submitting..." : "Submit Review"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
