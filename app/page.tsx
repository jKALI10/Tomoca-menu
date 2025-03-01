"use client";

import * as React from "react";
import Image from "next/image";
import { Coffee, Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ModernMenu() {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Header */}

      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="#">
              <Coffee className="h-6 w-10 text-orange-700" />
              <span className="hidden font-bold sm:inline-block">TOMOCA</span>
            </a>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDark(!isDark)}
              className="dark:text-zinc-50"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-6 md:py-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Coffee className="h-12 w-12 text-orange-700" />
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Modern Coffee Experience
          </h1>
          <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
            Discover our carefully curated selection of premium coffees and
            delightful treats.
          </p>
        </div>

        <div className="mt-12">
          <Tabs defaultValue="hot" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:w-[400px] mx-auto">
              <TabsTrigger value="hot">Hot Drinks</TabsTrigger>
              <TabsTrigger value="cold">Cold Drinks</TabsTrigger>
              <TabsTrigger value="food">Food</TabsTrigger>
            </TabsList>
            <TabsContent value="hot" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {hotDrinks.map((item) => (
                  <MenuCard key={item.name} item={item} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="cold" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {coldDrinks.map((item) => (
                  <MenuCard key={item.name} item={item} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="food" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {foodItems.map((item) => (
                  <MenuCard key={item.name} item={item} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Featured Section */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold text-center mb-8">
            Featured Drinks
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {featuredItems.map((item) => (
              <Card key={item.name} className="overflow-hidden group">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold truncate">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.description}
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-purple-600 dark:text-purple-400 font-medium">
                      {item.price.toFixed(2)}ETB
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t mt-20">
        <div className="container py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold mb-4">Location</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Bishoftu
                <br />
                547 street bishoftu
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Hours</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Monday - Friday: 7am - 8pm
                <br />
                Saturday - Sunday: 8am - 7pm
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Phone: (+251) 34785433
                <br />
                Email: hello@Tomoca.com
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-zinc-500 dark:text-zinc-400">
            <p>© {new Date().getFullYear()}Tomoca. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-4 flex gap-4">
        <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start gap-2">
            <h3 className="font-medium truncate">{item.name}</h3>
            <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-2 py-1 rounded-full text-sm font-medium">
              {item.price.toFixed(2)}ETB
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {item.description}
          </p>
          {item.tags?.map((tag) => (
            <span
              key={tag}
              className="inline-block text-xs px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded-full mt-2 mr-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}

interface MenuItem {
  name: string;
  description: string;
  price: number;
  image: string;
  tags?: string[];
}

const hotDrinks: MenuItem[] = [
  {
    name: "Classic Espresso",
    description: "Rich and full-bodied single shot of espresso",
    price: 102,
    image: "/Cappuccino1.jpg?height=80&width=80",
    tags: ["Signature"],
  },
  {
    name: "Bunna",
    description: "Rich and full-bodied single shot of espresso",
    price: 121,
    image: "bu.jpg?height=80&width=80",
    tags: ["Signature"],
  },
  {
    name: "Cappuccino",
    description: "Espresso topped with foamy milk and chocolate powder",
    price: 100,
    image: "/Cappuccino1.jpg?height=80&width=80",
    tags: ["Popular"],
  },
  {
    name: "Vanilla Latte",
    description: "Espresso with steamed milk and vanilla syrup",
    price: 200,
    image: "/vanilla-latte1.jpg?height=80&width=80",
  },
  {
    name: "Caramel Macchiato",
    description: "Vanilla-flavored drink marked with espresso and caramel",
    price: 150,
    image: "/Cappuccino1.jpg?height=80&width=80",
    tags: ["Bestseller"],
  },
  {
    name: "Mocha",
    description: "Espresso with chocolate and steamed milk",
    price: 160,
    image: "/Cappuccino1.jpg?height=80&width=80",
  },
  {
    name: "Americano",
    description: "Espresso shots topped with hot water",
    price: 168,
    image: "/bu.jpg?height=80&width=80",
  },
];

const coldDrinks: MenuItem[] = [
  {
    name: "Iced Coffee",
    description: "Fresh brewed coffee served over ice",
    price: 179,
    image: "/Cappuccino1.jpg?height=80&width=80",
  },
  {
    name: "Cold Brew",
    description: "Slow-steeped, super-smooth coffee served over ice",
    price: 168,
    image: "/Cappuccino1.jpg?height=80&width=80",
    tags: ["Popular"],
  },
  {
    name: "Iced Latte",
    description: "Espresso, milk, and your choice of flavor over ice",
    price: 200,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Frozen Mocha",
    description: "Blended mocha sauce, coffee, milk, and ice",
    price: 220,
    image: "/placeholder.svg?height=80&width=80",
    tags: ["Seasonal"],
  },
  {
    name: "Iced Green Tea Latte",
    description: "Premium matcha green tea over ice",
    price: 210,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Mango Passion Refresher",
    description: "Tropical mango and passion fruit juice over ice",
    price: 190,
    image: "/placeholder.svg?height=80&width=80",
    tags: ["New"],
  },
];

const foodItems: MenuItem[] = [
  {
    name: "Butter Croissant",
    description: "Flaky, buttery French pastry",
    price: 120,
    image: "/placeholder.svg?height=80&width=80",
    tags: ["Vegetarian"],
  },
  {
    name: "Blueberry Muffin",
    description: "Fresh baked muffin with whole blueberries",
    price: 234,
    image: "/placeholder.svg?height=80&width=80",
    tags: ["Vegetarian"],
  },
  {
    name: "Avocado Toast",
    description: "Smashed avocado, cherry tomatoes on sourdough",
    price: 234,
    image: "/placeholder.svg?height=80&width=80",
    tags: ["Vegetarian", "Breakfast"],
  },
  {
    name: "Breakfast Sandwich",
    description: "Bacon, egg, and cheese on a croissant",
    price: 234,
    image: "/placeholder.svg?height=80&width=80",
    tags: ["Breakfast"],
  },
  {
    name: "Chocolate Chip Cookie",
    description: "Fresh baked cookie with Belgian chocolate",
    price: 120,
    image: "/placeholder.svg?height=80&width=80",
    tags: ["Vegetarian"],
  },
  {
    name: "Grilled Chicken Sandwich",
    description: "Herb-marinated chicken with avocado and greens",
    price: 234,
    image: "/placeholder.svg?height=80&width=80",
    tags: ["Lunch"],
  },
];

const featuredItems: MenuItem[] = [
  {
    name: "Signature Cold Brew",
    description: "Our house special cold brew with vanilla sweet cream",
    price: 235,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Lavender Honey Latte",
    description: "Espresso with lavender syrup and local honey",
    price: 233,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Matcha Green Tea Latte",
    description: "Premium Japanese matcha with steamed milk",
    price: 123,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Caramel Frappé",
    description: "Blended coffee with caramel and whipped cream",
    price: 352,
    image: "/placeholder.svg?height=400&width=300",
  },
];
