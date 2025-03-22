import { CardBody, CardContainer } from "@/components/ui/3d-card";

export default function ThreeDCardDemo({ shouldMove, children }: { shouldMove: boolean, children: React.ReactNode }) {
  return (
    
   <CardContainer className="cursor-none pointer-events-none max-h-9/12 max-w-11/12 min-w-[97%] inter-var hover:cursor-default">
      <CardBody className={`cursor-none pointer-events-auto overflow-hidden backdrop-blur-xl relative group/card dark:hover:shadow-5xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.6] max-w-full min-w-8/12 sm:w-[30rem] max-h-9/12 rounded-xl  transition-all duration-300 ${shouldMove ? 'border-6' : 'border'}`}>
          {children}
      </CardBody>
    </CardContainer>
  );
}