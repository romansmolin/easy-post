import { Button } from "@/shared/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/shared/ui/card";
import { Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
enum PopularPlan {
    NO = 0,
    YES = 1,
}

interface PlanProps {
    title: string;
    popular: PopularPlan;
    monthlyPrice: number;
    yearlyPrice: number;
    description: string;
    buttonText: string;
    benefitList: string[];
}

const plans: PlanProps[] = [
    {
        title: "Starter",
        popular: PopularPlan.NO,
        monthlyPrice: 9,
        yearlyPrice: 5,
        description: "Basic features to get you started.",
        buttonText: "Get Started",
        benefitList: [
            "5 connected social accounts",
            "Unlimited posts",
            "Schedule posts",
            "Carousel posts"
        ],
    },
    {
        title: "Premium",
        popular: PopularPlan.YES,
        monthlyPrice: 18,
        yearlyPrice: 10,
        description: "More power and features for growing your business.",
        buttonText: "Get Started",
        benefitList: [
            "15 connected social accounts",
            "Unlimited posts",
            "Schedule posts",
            "Carousel posts",
            "AI assistance"
        ],
    },
    {
        title: "Enterprise",
        popular: PopularPlan.NO,
        monthlyPrice: 27,
        yearlyPrice: 16,
        description: "Advanced features for large teams and businesses.",
        buttonText: "Get Started",
        benefitList: [
            "Unlimited connected accounts",
            "Unlimited posts",
            "Schedule posts",
            "Carousel posts",
            "AI assistance"
        ],
    },
];

export const PricingSection = () => {
    return (
        <section className="lg:max-w-screen-lg mx-auto px-8 py-8 md:py-20 sm:px-0">
            <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
                Pricing
            </h2>

            <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
                Get unlimitted access
            </h2>

            <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing reiciendis.
            </h3>

            <Tabs defaultValue="yearly" className="flex flex-col gap-15">
                <TabsList className="grid w-fit mx-auto grid-cols-2 bg-transparent border-1 border-primary">
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                    <TabsTrigger value="yearly">Yearly</TabsTrigger>
                </TabsList>

                <TabsContent value="monthly">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
                        {plans.map(
                            ({ title, popular, monthlyPrice, description, buttonText, benefitList }) => (
                                <Card
                                    key={title}
                                    className={
                                        `${popular === PopularPlan?.YES ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]" : ""} flex flex-col h-full`
                                    }
                                >
                                    <CardHeader>
                                        <CardTitle className="pb-2">{title}</CardTitle>

                                        <CardDescription className="pb-4">
                                            {description}
                                        </CardDescription>

                                        <div>
                                            <span className="text-3xl font-bold">${monthlyPrice}</span>
                                            <span className="text-muted-foreground"> /month</span>
                                        </div>
                                    </CardHeader>

                                    <CardContent className="flex">
                                        <div className="space-y-4">
                                            {benefitList.map((benefit) => (
                                                <span key={benefit} className="flex">
                                                    <Check className="text-primary mr-2" />
                                                    <h3>{benefit}</h3>
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>

                                    <CardFooter className="mt-auto">
                                        <Button
                                            variant={
                                                popular === PopularPlan?.YES ? "default" : "secondary"
                                            }
                                            className="w-full"
                                        >
                                            {buttonText}
                                        </Button>
                                    </CardFooter>
                                </Card>
                            )
                        )}
                    </div>
                </TabsContent>

                <TabsContent value="yearly">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
                        {plans.map(
                            ({ title, popular, yearlyPrice, description, buttonText, benefitList }) => (
                                <Card
                                    key={title}
                                    className={
                                        `${popular === PopularPlan?.YES ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]" : ""} flex flex-col h-full`
                                    }
                                >
                                    <CardHeader>
                                        <CardTitle className="pb-2">{title}</CardTitle>

                                        <CardDescription className="pb-4">
                                            {description}
                                        </CardDescription>

                                        <div>
                                            <span className="text-3xl font-bold">${yearlyPrice}</span>
                                            <span className="text-muted-foreground"> /month (billed yearly)</span>
                                        </div>
                                    </CardHeader>

                                    <CardContent className="flex">
                                        <div className="space-y-4">
                                            {benefitList.map((benefit) => (
                                                <span key={benefit} className="flex">
                                                    <Check className="text-primary mr-2" />
                                                    <h3>{benefit}</h3>
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>

                                    <CardFooter className="mt-auto">
                                        <Button
                                            variant={
                                                popular === PopularPlan?.YES ? "default" : "secondary"
                                            }
                                            className="w-full"
                                        >
                                            {buttonText}
                                        </Button>
                                    </CardFooter>
                                </Card>
                            )
                        )}
                    </div>
                </TabsContent>
            </Tabs>
        </section>
    );
};