import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const sentimentData = [
  { name: "Positive", value: 400 },
  { name: "Neutral", value: 300 },
  { name: "Negative", value: 200 },
];

const emotionData = [
  { name: "Joy", value: 200 },
  { name: "Sadness", value: 100 },
  { name: "Anger", value: 80 },
  { name: "Fear", value: 50 },
  { name: "Surprise", value: 70 },
];

const topKeywords = [
  { text: "product quality", value: 100 },
  { text: "customer service", value: 80 },
  { text: "user interface", value: 60 },
  { text: "pricing", value: 40 },
  { text: "delivery time", value: 30 },
];

const sentimentTrendData = [
  { date: "2023-01", positive: 300, neutral: 200, negative: 100 },
  { date: "2023-02", positive: 400, neutral: 300, negative: 150 },
  { date: "2023-03", positive: 350, neutral: 250, negative: 120 },
  { date: "2023-04", positive: 450, neutral: 350, negative: 180 },
  { date: "2023-05", positive: 500, neutral: 400, negative: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

export default function SentimentAnalysis() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 bg-background">
      <h1 className="text-3xl font-bold mb-6">Sentiment Analysis</h1>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
          <TabsTrigger value="emotions">Emotions</TabsTrigger>
          <TabsTrigger value="topics">Topics & Keywords</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Overall Sentiment</CardTitle>
                <CardDescription>
                  Distribution of sentiment in customer feedback
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={sentimentData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {sentimentData.map((entry, index) => (
                        <Cell
                          key={`cell-${entry.name}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Top Emotions</CardTitle>
                <CardDescription>
                  Most prevalent emotions in feedback
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={emotionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Top Keywords</CardTitle>
                <CardDescription>
                  Most frequently mentioned topics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  {topKeywords.map((keyword) => (
                    <li key={keyword.text} className="mb-2">
                      {keyword.text} ({keyword.value})
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="sentiment">
          <Card>
            <CardHeader>
              <CardTitle>Detailed Sentiment Analysis</CardTitle>
              <CardDescription>
                In-depth look at sentiment distribution and trends
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={sentimentTrendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="positive" stroke="#8884d8" />
                  <Line type="monotone" dataKey="neutral" stroke="#82ca9d" />
                  <Line type="monotone" dataKey="negative" stroke="#ffc658" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="emotions">
          <Card>
            <CardHeader>
              <CardTitle>Emotion Analysis</CardTitle>
              <CardDescription>
                Detailed breakdown of emotions in customer feedback
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={emotionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="topics">
          <Card>
            <CardHeader>
              <CardTitle>Topic and Keyword Analysis</CardTitle>
              <CardDescription>
                Automatically extracted themes and important phrases
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={topKeywords} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="text" type="category" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
