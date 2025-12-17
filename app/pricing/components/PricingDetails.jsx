import React from 'react'

const PricingDetails = () => {
  const pricingData = [
    {
      category: "APP\nDEVELOPMENT",
      items: [
        { label: "Starter App (MVP):", price: "$3,000 – $7,000" },
        { label: "Full App:", price: "$10,000 – $25,000" }
      ]
    },
    {
      category: "CUSTOM\nSOFTWARE",
      items: [
        { label: "Internal tools and business software:", price: "$5,000 – $40,000" }
      ]
    },
    {
      category: "APP SCALING\nPACKAGES",
      items: [
        { label: null, price: "$299 – $1,200 monthly" }
      ]
    },
    {
      category: "CONSULTING",
      items: [
        { label: null, price: "Starting at $150/hr or project-based" }
      ]
    },
    {
      category: "WHITE LABEL APPS",
      items: [
        { label: null, price: "Custom pricing depending on product" }
      ]
    }
  ]

  return (
    <section className="section-solid w-full py-20 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        {pricingData.map((section, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:justify-between py-10"
          >
            {/* Left - Category Name */}
            <div className="mb-6 md:mb-0 md:w-[40%]">
              <h3 className="text-white text-sm md:text-base font-medium tracking-wide uppercase whitespace-pre-line">
                {section.category}
              </h3>
            </div>

            {/* Right - Pricing Items */}
            <div className="md:w-[50%] flex flex-col gap-4">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-start gap-3">
                  <span className="text-text-dim mt-1">•</span>
                  <div>
                    {item.label && (
                      <span className="text-text-dim text-sm md:text-base block mb-1">
                        {item.label}
                      </span>
                    )}
                    <span className="text-white text-sm md:text-base font-medium">
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PricingDetails
