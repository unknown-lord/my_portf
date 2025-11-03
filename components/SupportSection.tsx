import Image from 'next/image';

const SupportSection = () => {
  return (
    <section className="py-16 bg-card-bg">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Support me here</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-background">
            <div className="flex-shrink-0">
              <Image src="/images/card.svg" alt="Credit Card" width={24} height={24} />
            </div>
            <div className="text-sm font-mono overflow-hidden text-ellipsis">
              4149500120690030
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-background">
            <div className="flex-shrink-0">
              <Image src="/images/bitcoin.svg" alt="Bitcoin" width={24} height={24} />
            </div>
            <div className="text-sm font-mono overflow-hidden text-ellipsis">
              3E8ociqZa9mZUSwGdSmAEMAoAxBK3FNDcd
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;