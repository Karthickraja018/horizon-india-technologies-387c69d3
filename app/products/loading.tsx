import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="bg-background min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-20" />
        </div>

        {/* Hero */}
        <div className="mb-16 md:mb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end">
            <div>
              <Skeleton className="h-4 w-32 mb-4" />
              <Skeleton className="h-16 w-3/4 mb-4" />
              <Skeleton className="h-16 w-1/2 mb-6" />
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-6 w-5/6" />
            </div>
            
            <div className="grid grid-cols-2 gap-8 border-l-2 border-border pl-8 py-2">
              <div>
                <Skeleton className="h-10 w-16 mb-2" />
                <Skeleton className="h-4 w-20" />
              </div>
              <div>
                <Skeleton className="h-10 w-20 mb-2" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
          {Array.from({ length: 6 }).map((_, i) => {
            const isLarge = i % 4 === 0 || i % 4 === 3;
            return (
              <div
                key={i}
                className={`bg-card border border-border p-8 rounded-xl flex flex-col ${
                  isLarge ? "md:col-span-2 lg:col-span-2" : "col-span-1"
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <Skeleton className="w-12 h-12 rounded-lg" />
                  <Skeleton className="w-16 h-6 rounded-sm" />
                </div>
                <div className="mt-auto">
                  <Skeleton className="w-3/4 h-8 mb-4" />
                  <Skeleton className="w-full h-4 mb-2" />
                  <Skeleton className="w-5/6 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
