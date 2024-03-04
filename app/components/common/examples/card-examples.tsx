import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardHeaderTitle,
} from '@/components/ui/card';

export const CardExample = () => (
  <Card className="scale-50 w-[320px]">
    <CardHeader>
      <CardHeaderTitle>Posted in #frontend</CardHeaderTitle>
    </CardHeader>
    <CardContent className="grid grid-cols-1 gap-4">
      {
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, nostrum iste doloremque eaque vel odio vitae inventore'
      }
    </CardContent>
    <CardFooter>{'Posted by Author'}</CardFooter>
  </Card>
);
