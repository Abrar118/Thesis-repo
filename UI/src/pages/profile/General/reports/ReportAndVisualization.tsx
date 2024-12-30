import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
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
import { Download, RefreshCw, Send } from "lucide-react";

const realtimeData = [
  { time: "10:00", sentiment: 75, volume: 120 },
  { time: "11:00", sentiment: 80, volume: 150 },
  { time: "12:00", sentiment: 78, volume: 180 },
  { time: "13:00", sentiment: 82, volume: 200 },
  { time: "14:00", sentiment: 85, volume: 220 },
  { time: "15:00", sentiment: 83, volume: 190 },
];

const topicDistribution = [
  { name: "Product Features", value: 400 },
  { name: "Customer Support", value: 300 },
  { name: "Pricing", value: 200 },
  { name: "User Experience", value: 100 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function ReportingAndVisualization() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 bg-background">
      <h1 className="text-3xl font-bold mb-6">Reporting and Visualization</h1>
      <Tabs defaultValue="realtime" className="space-y-4">
        <TabsList>
          <TabsTrigger value="realtime">Real-time Insights</TabsTrigger>
          <TabsTrigger value="reports">Report Generation</TabsTrigger>
          <TabsTrigger value="export">Data Export</TabsTrigger>
        </TabsList>
        <TabsContent value="realtime">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Sentiment Trend</CardTitle>
                <CardDescription>Real-time sentiment analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={realtimeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="sentiment"
                      stroke="#8884d8"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Feedback Volume</CardTitle>
                <CardDescription>Real-time feedback volume</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={realtimeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="volume" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Topic Distribution</CardTitle>
                <CardDescription>
                  Current distribution of feedback topics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={topicDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) =>
                        `${name} ${(percent * 100).toFixed(0)}%`
                      }
                    >
                      {topicDistribution.map((entry, index) => (
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
          </div>
        </TabsContent>
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Generate Report</CardTitle>
              <CardDescription>
                Create custom reports based on your data
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="report-type">Report Type</Label>
                <Select>
                  <SelectTrigger id="report-type">
                    <SelectValue placeholder="Select report type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="summary">Summary Report</SelectItem>
                    <SelectItem value="detailed">Detailed Analysis</SelectItem>
                    <SelectItem value="trends">Trend Report</SelectItem>
                    <SelectItem value="custom">Custom Report</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="date-range">Date Range</Label>
                <Select>
                  <SelectTrigger id="date-range">
                    <SelectValue placeholder="Select date range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="last-7">Last 7 days</SelectItem>
                    <SelectItem value="last-30">Last 30 days</SelectItem>
                    <SelectItem value="last-90">Last 90 days</SelectItem>
                    <SelectItem value="custom">Custom Range</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="report-format">Report Format</Label>
                <Select>
                  <SelectTrigger id="report-format">
                    <SelectValue placeholder="Select report format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pdf">PDF</SelectItem>
                    <SelectItem value="excel">Excel</SelectItem>
                    <SelectItem value="html">HTML</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Send className="mr-2 h-4 w-4" /> Generate Report
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="export">
          <Card>
            <CardHeader>
              <CardTitle>Export Data</CardTitle>
              <CardDescription>
                Export your data in various formats
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="export-type">Export Type</Label>
                <Select>
                  <SelectTrigger id="export-type">
                    <SelectValue placeholder="Select export type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Data</SelectItem>
                    <SelectItem value="sentiment">
                      Sentiment Analysis
                    </SelectItem>
                    <SelectItem value="topics">Topic Analysis</SelectItem>
                    <SelectItem value="custom">Custom Export</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="export-format">Export Format</Label>
                <Select>
                  <SelectTrigger id="export-format">
                    <SelectValue placeholder="Select export format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="csv">CSV</SelectItem>
                    <SelectItem value="json">JSON</SelectItem>
                    <SelectItem value="excel">Excel</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="date-range-export">Date Range</Label>
                <Input id="date-range-export" type="date" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button>
                <Download className="mr-2 h-4 w-4" /> Export Data
              </Button>
              <Button variant="outline">
                <RefreshCw className="mr-2 h-4 w-4" /> Reset
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
