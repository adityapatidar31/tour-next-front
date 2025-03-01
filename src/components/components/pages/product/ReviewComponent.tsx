import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { MessageSquareCode, Star } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface User {
  _id: string;
  name: string;
  photo: string;
}

interface Review {
  _id: string;
  review: string;
  rating: number;
  createAt: string;
  user: User;
}

interface ReviewListProps {
  reviews: Review[];
}

function ReviewList({ reviews }: ReviewListProps) {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold flex items-center gap-3">
        <span>
          <MessageSquareCode className="w-6 h-6 text-violet-500" />
        </span>
        Reviews
      </h2>
      <Separator className="mt-2 mb-5" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <Card
            key={review._id}
            className="p-4 rounded-2xl shadow-lg bg-[--background]"
          >
            <CardContent className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Avatar>
                  <img
                    src={`/img/${review.user.photo}`}
                    alt={review.user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </Avatar>
                <div>
                  <h4 className="font-semibold text-lg text-[--foreground]">
                    {review.user.name}
                  </h4>
                  <p className="text-sm text-[--muted]">
                    {new Date(review.createAt).toDateString()}
                  </p>
                </div>
              </div>
              <p className="text-[--foreground] text-sm">{review.review}</p>
              <div className="flex items-center gap-1 text-yellow-500">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" stroke="none" />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ReviewList;
