import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, Database, Play, RefreshCw } from "lucide-react";

export default function MLModelTraining() {
  const [trainingProgress, setTrainingProgress] = React.useState(0);

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 bg-background">
      <h1 className="text-3xl font-bold mb-6">ML Model Training</h1>
      <Tabs defaultValue="selection" className="space-y-4">
        <TabsList>
          <TabsTrigger value="selection">Model Selection</TabsTrigger>
          <TabsTrigger value="preprocessing">Data Preprocessing</TabsTrigger>
          <TabsTrigger value="training">Training</TabsTrigger>
        </TabsList>
        <TabsContent value="selection">
          <Card>
            <CardHeader>
              <CardTitle>Select Model and Data</CardTitle>
              <CardDescription>
                Choose the model type and upload training data
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="model-type">Model Type</Label>
                <Select>
                  <SelectTrigger id="model-type">
                    <SelectValue placeholder="Select model type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rnn">
                      Recurrent Neural Network (RNN)
                    </SelectItem>
                    <SelectItem value="qml">
                      Quantum Machine Learning (QML)
                    </SelectItem>
                    <SelectItem value="nng">
                      Neural Network Graph (NNG)
                    </SelectItem>
                    <SelectItem value="rf">Random Forest (RF)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="training-data">Training Data</Label>
                <Input id="training-data" type="file" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Upload className="mr-2 h-4 w-4" /> Upload Data
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="preprocessing">
          <Card>
            <CardHeader>
              <CardTitle>Data Preprocessing</CardTitle>
              <CardDescription>
                Configure preprocessing methods for your data
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="text-cleaning">Text Cleaning</Label>
                <Select>
                  <SelectTrigger id="text-cleaning">
                    <SelectValue placeholder="Select cleaning method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">
                      Basic (Remove punctuation)
                    </SelectItem>
                    <SelectItem value="stemming">Stemming</SelectItem>
                    <SelectItem value="lemmatization">Lemmatization</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="feature-extraction">Feature Extraction</Label>
                <Select>
                  <SelectTrigger id="feature-extraction">
                    <SelectValue placeholder="Select feature extraction method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bow">Bag of Words</SelectItem>
                    <SelectItem value="tfidf">TF-IDF</SelectItem>
                    <SelectItem value="word2vec">Word2Vec</SelectItem>
                    <SelectItem value="bert">BERT Embeddings</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Additional Preprocessing Techniques</Label>
                <div className="flex items-center space-x-2">
                  <Checkbox id="lowercase" />
                  <Label htmlFor="lowercase">Convert to lowercase</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="remove-stopwords" />
                  <Label htmlFor="remove-stopwords">Remove stopwords</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="handle-negations" />
                  <Label htmlFor="handle-negations">Handle negations</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="expand-contractions" />
                  <Label htmlFor="expand-contractions">
                    Expand contractions
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="handle-emojis" />
                  <Label htmlFor="handle-emojis">
                    Handle emojis and emoticons
                  </Label>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Database className="mr-2 h-4 w-4" /> Apply Preprocessing
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="training">
          <Card>
            <CardHeader>
              <CardTitle>Model Training</CardTitle>
              <CardDescription>
                Start and monitor the training process
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Training Progress</Label>
                <Progress value={trainingProgress} className="w-full" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="epochs">Number of Epochs</Label>
                <Input
                  id="epochs"
                  type="number"
                  placeholder="Enter number of epochs"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="batch-size">Batch Size</Label>
                <Input
                  id="batch-size"
                  type="number"
                  placeholder="Enter batch size"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="learning-rate">Learning Rate</Label>
                <Input
                  id="learning-rate"
                  type="number"
                  placeholder="Enter learning rate"
                  step="0.001"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button>
                <Play className="mr-2 h-4 w-4" /> Start Training
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
