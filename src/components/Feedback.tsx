import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Star } from "lucide-react";

export const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Thank you for your feedback!",
      description: "I appreciate your time and input.",
    });
    e.currentTarget.reset();
    setRating(0);
  };

  return (
    <section id="feedback" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Your <span className="gradient-text">Feedback</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full"></div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Share Your Thoughts</CardTitle>
            <CardDescription>
              I'd love to hear your feedback on my work or any suggestions you might have.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input id="name" placeholder="Your name" required />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="your@email.com" required />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        className={`h-8 w-8 ${
                          star <= (hoveredRating || rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-muted-foreground"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Share your thoughts..."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="w-full btn-gradient">
                Submit Feedback
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
