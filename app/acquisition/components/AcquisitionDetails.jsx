import React from 'react'

const AcquisitionDetails = () => {
  const acquisitionData = [
    {
      category: "APP SALES &\nAQUISITION",
      content: [
        {
          text: "Compell builds apps that can be purchased outright by:",
          items: [
            "Investors",
            "Entrepreneurs",
            "Businesses looking to expand offerings"
          ]
        },
        {
          text: "Each app comes with:",
          items: [
            "Source code",
            "Documentation",
            "Onboarding training"
          ]
        }
      ]
    },
    {
      category: "Partnership\nOpportunities",
      content: [
        {
          text: null,
          items: [
            "Co-build a digital product",
            "Revenue-sharing partnership",
            "Joint product ventures",
            "Licensing deals"
          ]
        }
      ]
    }
  ]

  return (
    <section className="section-solid w-full py-20 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        {acquisitionData.map((section, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:justify-between py-10"
          >
            {/* Left - Category Name */}
            <div className="mb-6 md:mb-0 md:w-[40%]">
              <h3 className="text-white text-sm md:text-base font-medium tracking-wide whitespace-pre-line">
                {section.category}
              </h3>
            </div>

            {/* Right - Content */}
            <div className="md:w-[50%] flex flex-col gap-8">
              {section.content.map((block, blockIndex) => (
                <div key={blockIndex} className="flex flex-col gap-4">
                  {/* Block Text */}
                  {block.text && (
                    <p className="text-white text-sm md:text-base">
                      {block.text}
                    </p>
                  )}

                  {/* Block Items */}
                  <div className="flex flex-col gap-2">
                    {block.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3">
                        <span className="text-white mt-1">•</span>
                        <span className="text-white text-sm md:text-base">
                          {item}
                        </span>
                      </div>
                    ))}
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

export default AcquisitionDetails
