import React from "react";
import Max from "../assets/images/Max.jpg";
import Doc from "../assets/images/Doc.jpg";
import MultiDisease from "../assets/images/Logo.png";

const projects = [
  {
    id: 1,
    title: "Maxturn",
    image: Max,
    description: `Maxturn is an innovative online clothing store developed by FusionFlare Technologies. Designed with a seamless user experience in mind, Maxturn offers a curated selection of high-quality apparel, catering to diverse fashion tastes and preferences. Our team meticulously crafted the platform, integrating advanced e-commerce functionalities, secure payment systems, and responsive design to ensure an optimal shopping experience across all devices. Maxturn not only reflects our commitment to excellence in digital solutions but also highlights our ability to create dynamic and scalable platforms that meet the evolving needs of the retail industry. With Maxturn, we have successfully combined style and technology to deliver a unique and engaging online shopping destination.`,
  },
  {
    id: 2,
    title: "AI Doctor",
    image: Doc,
    description: `The AiDoc Report provides an in-depth analysis of AI-based document processing and management systems, highlighting their potential to enhance productivity, accuracy, and efficiency in handling large volumes of documents. The report discusses key features such as data extraction, document classification, and automated workflows, all of which contribute to streamlining document management processes. Applications of these technologies span various industries, including legal, healthcare, and finance, where they automate tasks like contract analysis, patient record management, and financial processing. The benefits of AI-driven document systems are clear, offering increased efficiency, accuracy, and significant time savings. However, the report also notes challenges, such as ensuring data security, integrating AI with existing systems, and the need for continuous updates. Overall, AI-driven document management systems are presented as a valuable investment for organizations seeking to improve their document handling capabilities.`,
  },
  {
    id: 3,
    title: "Multi-Disease Prediction System",
    image: MultiDisease,
    description: `The Multi-Disease Prediction System is a project developed by FusionFlare Technologies aimed at creating a comprehensive application for predicting various diseases using machine learning (ML). The system integrates models trained on diseases like Diabetes, Heart Disease, Breast Cancer, and Lung Cancer into a single user-friendly interface.

    Project Phases:
    - Data Collection and Preprocessing: Collect datasets from platforms like Kaggle. Preprocess data by handling missing values and normalizing features.
    - Model Training: Train ML models for each disease using algorithms like Logistic Regression, Random Forest, and SVM. Evaluate models using accuracy, precision, and F1-score.
    - Model Integration: Combine all models into a single Python application with a Streamlit-based interface for users to select and predict different diseases.
    - LLM Integration: Incorporate a Language Learning Model (e.g., GPT) to handle general disease-related queries within the app.
    - Deployment: Deploy the system on Streamlit, refining the UI/UX for an optimal user experience.`,
  },
];

function OurWork() {
  return (
    <section className="flex flex-col items-center py-12 px-6 md:px-20">
      <h2 className="text-4xl font-bold mb-8 text-center">Our Work</h2>
      {projects.map((project, index) => (
        <React.Fragment key={project.id}>
          <div
            className={`flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 mb-12 ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            <a
              href="https://ai-doctor-bot.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                alt={`${project.title} Logo`}
                className={`w-48 h-48 object-contain ${
                  index % 2 === 0 ? "mr-12" : "ml-12"
                }`}
              />
            </a>

            <div className="w-[15px] h-60 bg-black hidden md:block rounded-full mx-4"></div>

            <p className="text-gray-700 text-justify md:w-2/3 leading-relaxed px-4">
              {project.description}
            </p>
          </div>

          {/* Add a horizontal line between projects */}
          {index < projects.length - 1 && (
            <hr className="w-full border-t-2 border-gray-300 my-8" />
          )}
        </React.Fragment>
      ))}
    </section>
  );
}

export default OurWork;
