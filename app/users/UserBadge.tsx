import React from 'react'
import { BadgeCheck, Cake, Crown, Rocket, Star } from "lucide-react";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card";
const userBadges = [
  {
    id: "verified",
    label: "Verified Buyer",
    description: "This user has made at least one confirmed purchase.",
    icon: BadgeCheck,
    className: "bg-blue-500/30 text-blue-500 border-blue-500/50",
  },
  {
    id: "top_reviewer",
    label: "Top Reviewer",
    description: "Awarded for writing more than 10 helpful product reviews.",
    icon: Star,
    className: "bg-yellow-500/30 text-yellow-500 border-yellow-500/50",
  },
  {
    id: "vip_customer",
    label: "VIP Customer",
    description: "Has spent over $1,000 in the last year. Unlocks exclusive perks!",
    icon: Crown,
    className: "bg-purple-500/30 text-purple-500 border-purple-500/50",
  },
  {
    id: "anniversary",
    label: "First Purchase Anniversary",
    description: "Celebrated one year since their first purchase on June 5, 2024.",
    icon: Cake,
    className: "bg-pink-500/30 text-pink-500 border-pink-500/50",
  },
  {
    id: "early_adopter",
    label: "Early Adopter",
    description: "One of the first 100 users to sign up for our store.",
    icon: Rocket,
    className: "bg-orange-500/30 text-orange-500 border-orange-500/50",
  },
];
const UserBadge = () => {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-3">
              {userBadges.map((badge) => (
                <HoverCard key={badge.id}>
                  <HoverCardTrigger>
                    <badge.icon
                      size={38}
                      className={`rounded-full border p-2 transition-transform hover:scale-110 ${badge.className}`}
                    />
                  </HoverCardTrigger>
                  <HoverCardContent className="w-auto max-w-xs text-sm">
                    <h3 className="font-semibold mb-1">{badge.label}</h3>
                    <p className="text-muted-foreground">{badge.description}</p>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
  )
}

export default UserBadge