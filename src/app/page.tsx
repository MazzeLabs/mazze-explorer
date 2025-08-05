export const dynamic = 'force-dynamic';
import LatestBlocks from "@/components/Blocks/LatestBlocks";
import SearchInput from "@/components/SearchInput";
import LatestTransactions from "@/components/Transactions/LatestTransactions";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mazze-orange/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-mazze-orange/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SearchInput />
        </div>
      </section>

      {/* Latest Data Section */}
      <section className="relative py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <LatestBlocks className="w-full" />
            <LatestTransactions className="w-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-white">Why Choose </span>
              <span className="mazze-text-gradient">Mazze</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Experience the future of blockchain with unmatched performance and security
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="mazze-card p-8 text-center">
              <div className="w-16 h-16 bg-mazze-orange-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-mazze-dark" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">40,000+ TPS</h3>
              <p className="text-white/70">Lightning-fast transaction processing with parallel block processing</p>
            </div>
            
            <div className="mazze-card p-8 text-center">
              <div className="w-16 h-16 bg-mazze-orange-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-mazze-dark" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">1s Finality</h3>
              <p className="text-white/70">Instant transaction confirmation with PoW-based DAG architecture</p>
            </div>
            
            <div className="mazze-card p-8 text-center">
              <div className="w-16 h-16 bg-mazze-orange-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-mazze-dark" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">ZK Proofs</h3>
              <p className="text-white/70">Enhanced privacy with Zero-Knowledge proofs for confidential transactions</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
