import { useState } from "react";
import { Search, Calculator, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SCHEMES_DATA, Scheme } from "@/data/schemes";
import { SchemeCard } from "./SchemeCard";

export const SchemeFinder = () => {
    const [age, setAge] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [profession, setProfession] = useState<string>("");
    const [income, setIncome] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [filteredSchemes, setFilteredSchemes] = useState<Scheme[]>([]);
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = () => {
        setHasSearched(true);
        let results = [...SCHEMES_DATA];

        const ageNum = parseInt(age);
        const keywords: string[] = [];

        // Build keyword profile based on inputs
        if (profession === "farmer") keywords.push("kisan", "farmer", "agriculture", "crop");
        if (profession === "student") keywords.push("student", "education", "scholarship");
        if (profession === "business") keywords.push("business", "loan", "startup", "mudra");
        if (profession === "unemployed") keywords.push("employment", "skill", "training", "job");

        if (gender === "female") keywords.push("women", "girl", "maternity", "female", "mahila", "beti");

        if (category === "sc_st") keywords.push("sc", "st", "scheduled", "dalit");
        if (category === "minority") keywords.push("minority", "muslim", "sikh", "christian");

        // Income based filtering (heuristic)
        if (income === "low" || income === "very_low") {
            keywords.push("bpl", "poor", "free", "ration", "housing", "awas");
        }

        // Special logic for age
        if (!isNaN(ageNum)) {
            if (ageNum < 18) keywords.push("child", "student");
            if (ageNum > 60) keywords.push("pension", "senior", "old");
        }

        // Filter logic
        if (keywords.length > 0) {
            results = results.filter(scheme => {
                // Check if scheme matches ANY of the user's attributes
                // We look for intersection between scheme's keywords and user's profile keywords
                const schemeKeywords = scheme.keywords.map(k => k.toLowerCase());
                const hasMatch = keywords.some(k => schemeKeywords.some(sk => sk.includes(k) || k.includes(sk)));

                // Also check eligibility string for specific keywords if gender/profession matches
                const eligibilityLower = scheme.eligibility.toLowerCase();
                const genderMatch = gender === "female" ? eligibilityLower.includes("women") || eligibilityLower.includes("girl") : true;
                // If scheme is exclusively for women (contains "women" in eligibility) and user is male, exclude it
                if (gender === "male" && (eligibilityLower.includes("women") || eligibilityLower.includes("girl") || scheme.title.toLowerCase().includes("mahila"))) {
                    return false;
                }

                return hasMatch;
            });
        }

        setFilteredSchemes(results);
    };

    return (
        <div className="w-full max-w-6xl mx-auto">
            <Card className="border-border shadow-lg bg-card overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-md">
                            <Search className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <CardTitle className="text-2xl">Scheme Finder</CardTitle>
                            <CardDescription className="text-base">
                                Enter your details to find eligible government schemes tailored for you
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">

                        {/* Age Input */}
                        <div className="space-y-2">
                            <Label htmlFor="age">Age (Years)</Label>
                            <Input
                                id="age"
                                type="number"
                                placeholder="e.g. 25"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </div>

                        {/* Gender Select */}
                        <div className="space-y-2">
                            <Label htmlFor="gender">Gender</Label>
                            <Select value={gender} onValueChange={setGender}>
                                <SelectTrigger id="gender">
                                    <SelectValue placeholder="Select Gender" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="male">Male</SelectItem>
                                    <SelectItem value="female">Female</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Profession Select */}
                        <div className="space-y-2">
                            <Label htmlFor="profession">Profession</Label>
                            <Select value={profession} onValueChange={setProfession}>
                                <SelectTrigger id="profession">
                                    <SelectValue placeholder="Select Profession" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="farmer">Farmer</SelectItem>
                                    <SelectItem value="student">Student</SelectItem>
                                    <SelectItem value="business">Business/Self-Employed</SelectItem>
                                    <SelectItem value="salaried">Salaried</SelectItem>
                                    <SelectItem value="unemployed">Unemployed</SelectItem>
                                    <SelectItem value="retired">Retired</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Income Select */}
                        <div className="space-y-2">
                            <Label htmlFor="income">Annual Family Income</Label>
                            <Select value={income} onValueChange={setIncome}>
                                <SelectTrigger id="income">
                                    <SelectValue placeholder="Select Income Range" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="very_low">Below ₹1 Lakh (BPL)</SelectItem>
                                    <SelectItem value="low">₹1 Lakh - ₹2.5 Lakh</SelectItem>
                                    <SelectItem value="medium">₹2.5 Lakh - ₹5 Lakh</SelectItem>
                                    <SelectItem value="high">Above ₹5 Lakh</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Category Select */}
                        <div className="space-y-2">
                            <Label htmlFor="category">Social Category</Label>
                            <Select value={category} onValueChange={setCategory}>
                                <SelectTrigger id="category">
                                    <SelectValue placeholder="Select Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="general">General</SelectItem>
                                    <SelectItem value="obc">OBC</SelectItem>
                                    <SelectItem value="sc_st">SC/ST</SelectItem>
                                    <SelectItem value="minority">Minority</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Action Button */}
                        <div className="flex items-end">
                            <Button onClick={handleSearch} className="w-full gap-2 shadow-md hover:shadow-lg">
                                <Calculator className="w-4 h-4" />
                                Find My Schemes
                            </Button>
                        </div>
                    </div>

                    {/* Results Section */}
                    {hasSearched && (
                        <div className="space-y-6 animate-fade-in-up mt-6 pt-6 border-t border-border">
                            <div className="flex items-center gap-3 pb-3">
                                <div className="h-1 w-16 rounded-full bg-gradient-primary"></div>
                                <h3 className="text-xl font-bold text-foreground">
                                    {filteredSchemes.length} Schemes Found
                                </h3>
                            </div>

                            {filteredSchemes.length > 0 ? (
                                <div className="grid md:grid-cols-2 gap-6">
                                    {filteredSchemes.map((scheme, index) => {
                                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                        const { keywords, ...schemeProps } = scheme;
                                        return <SchemeCard key={index} {...schemeProps} />;
                                    })}
                                </div>
                            ) : (
                                <div className="text-center py-12 px-4">
                                    <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                                        <Filter className="w-10 h-10 text-muted-foreground" />
                                    </div>
                                    <p className="text-lg font-medium text-foreground mb-2">No Specific Schemes Found</p>
                                    <p className="text-muted-foreground">Try broadening your search criteria or check all schemes below</p>
                                </div>
                            )}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};
