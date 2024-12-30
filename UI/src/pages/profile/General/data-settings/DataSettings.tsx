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
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DataSettings() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 bg-background">
      <h1 className="text-3xl font-bold mb-6">Data Settings</h1>
      <Tabs defaultValue="upload" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upload">Data Upload</TabsTrigger>
          <TabsTrigger value="processing">Data Processing</TabsTrigger>
          <TabsTrigger value="storage">Data Storage</TabsTrigger>
        </TabsList>
        <TabsContent value="upload">
          <Card>
            <CardHeader>
              <CardTitle>Data Upload Configuration</CardTitle>
              <CardDescription>
                Configure settings for data upload
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="max-file-size">Maximum File Size (MB)</Label>
                <Input id="max-file-size" type="number" defaultValue={50} />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="allowed-formats">Allowed File Formats</Label>
                <Input id="allowed-formats" defaultValue=".csv, .xlsx, .json" />
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="auto-process" />
                <Label htmlFor="auto-process">
                  Automatically process uploaded data
                </Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Upload Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="processing">
          <Card>
            <CardHeader>
              <CardTitle>Data Processing Configuration</CardTitle>
              <CardDescription>
                Configure settings for data processing
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="processing-threads">Processing Threads</Label>
                <Input id="processing-threads" type="number" defaultValue={4} />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="batch-size">Batch Size</Label>
                <Input id="batch-size" type="number" defaultValue={1000} />
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="data-anonymization" />
                <Label htmlFor="data-anonymization">
                  Enable data anonymization
                </Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Processing Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="storage">
          <Card>
            <CardHeader>
              <CardTitle>Data Storage Configuration</CardTitle>
              <CardDescription>
                Configure settings for data storage
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="storage-type">Storage Type</Label>
                <Select defaultValue="local">
                  <SelectTrigger id="storage-type">
                    <SelectValue placeholder="Select storage type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="local">Local Storage</SelectItem>
                    <SelectItem value="cloud">Cloud Storage</SelectItem>
                    <SelectItem value="hybrid">Hybrid Storage</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="retention-period">
                  Data Retention Period (days)
                </Label>
                <Input id="retention-period" type="number" defaultValue={365} />
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="data-encryption" />
                <Label htmlFor="data-encryption">Enable data encryption</Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Storage Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
