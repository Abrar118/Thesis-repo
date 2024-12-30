import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
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

const satisfactionTrendData = [
  { month: "Jan", satisfaction: 75 },
  { month: "Feb", satisfaction: 78 },
  { month: "Mar", satisfaction: 80 },
  { month: "Apr", satisfaction: 79 },
  { month: "May", satisfaction: 82 },
  { month: "Jun", satisfaction: 85 },
];

const churnRiskData = [
  { category: "Low Risk", value: 60 },
  { category: "Medium Risk", value: 30 },
  { category: "High Risk", value: 10 },
];

const recommendedImprovements = [
  {
    category: "Customer Support",
    recommendations: [
      "Reduce response time to under 2 hours",
      "Implement 24/7 chat support",
      "Provide more comprehensive self-service options",
    ],
  },
  {
    category: "Product Features",
    recommendations: [
      "Develop AI-powered personalization",
      "Improve mobile app functionality",
      "Add integration with popular third-party tools",
    ],
  },
  {
    category: "User Experience",
    recommendations: [
      "Simplify the onboarding process",
      "Redesign dashboard for better data visualization",
      "Implement single sign-on (SSO) for enterprise clients",
    ],
  },
  {
    category: "Pricing and Plans",
    recommendations: [
      "Introduce a flexible pay-as-you-go option",
      "Offer discounts for annual subscriptions",
      "Create a tier specifically for small businesses",
    ],
  },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function PredictiveAnalysis() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 bg-background">
      <h1 className="text-3xl font-bold mb-6">Predictive Analysis</h1>
      <Tabs defaultValue="trends" className="space-y-4">
        <TabsList>
          <TabsTrigger value="trends">Satisfaction Trends</TabsTrigger>
          <TabsTrigger value="churn">Churn Risks</TabsTrigger>
          <TabsTrigger value="improvements">
            Recommended Improvements
          </TabsTrigger>
        </TabsList>
        <TabsContent value="trends">
          <Card>
            <CardHeader>
              <CardTitle>Customer Satisfaction Trends</CardTitle>
              <CardDescription>
                Predicted satisfaction levels over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={satisfactionTrendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="satisfaction"
                    stroke="#8884d8"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="churn">
          <Card>
            <CardHeader>
              <CardTitle>Churn Risk Analysis</CardTitle>
              <CardDescription>
                Predicted customer churn risk levels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={churnRiskData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {churnRiskData.map((entry, index) => (
                      <Cell
                        key={`cell-${entry.category}`}
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
        </TabsContent>
        <TabsContent value="improvements">
          <Card>
            <CardHeader>
              <CardTitle>Recommended Improvements</CardTitle>
              <CardDescription>
                AI-generated suggestions based on analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {recommendedImprovements.map((category) => (
                  <div key={category.category} className="space-y-2">
                    <h3 className="text-lg font-semibold">
                      {category.category}
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {category.recommendations.map((recommendation) => (
                        <li key={recommendation}>{recommendation}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
