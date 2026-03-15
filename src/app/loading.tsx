export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-24 h-24 border-8 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Loading...
        </h2>
        <p className="text-gray-500">
          Please wait while we fetch your content
        </p>

        <div className="flex justify-center space-x-2 mt-6">
          <div className="w-3 h-3 bg-primary-600 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-primary-600 rounded-full animate-pulse delay-75"></div>
          <div className="w-3 h-3 bg-primary-600 rounded-full animate-pulse delay-150"></div>
        </div>
      </div>
    </div>
  )
}
