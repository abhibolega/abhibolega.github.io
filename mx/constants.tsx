
import { Pillar, FrameworkType } from './types';

export const WCM_PILLARS: Pillar[] = [
  {
    id: 'safety',
    title: 'Safety',
    icon: '🛡️',
    color: 'bg-green-500',
    description: 'The foundation of WCM. Aiming for Zero Accidents and Zero Occupational Diseases.',
    specificGoal: 'ZERO ACCIDENTS',
    keyPoints: ['BBS', 'Safety Pyramid', 'Root Cause Analysis', 'Risk Assessment'],
    chemicalContext: 'Process Hazard Analysis (PHA) and HAZOP studies for reactor systems.',
    steps: [
      { title: 'Safety Organization', detail: 'Establish the pillar structure, safety committees, and define clear ownership for emergency response zones.' },
      { title: 'Accident Analysis', detail: 'Perform deep-dive analysis of historical incident data to identify high-risk chemical process trends.' },
      { title: 'Condition Countermeasures', detail: 'Implement physical safety upgrades like redundant interlocks, secondary containment, and enhanced guarding.' },
      { title: 'Behavioral Actions', detail: 'Deploy Behavioral Based Safety (BBS) programs to identify and eliminate unsafe acts during chemical charging or maintenance.' },
      { title: 'Safety Standards', detail: 'Formalize site-wide Standard Operating Procedures (SOPs) for high-risk process tasks and hazardous material handling.' },
      { title: 'Self-Management', detail: 'Shift the daily safety inspection burden to autonomous operator teams who monitor their own process areas.' },
      { title: 'Total Safety Culture', detail: 'Achieve a state of interdependent safety where every employee acts as a guardian for themselves and their peers.' }
    ]
  },
  {
    id: 'cost-deployment',
    title: 'Cost Deployment',
    icon: '📊',
    color: 'bg-blue-600',
    description: 'Identifying where losses occur in financial terms to prioritize improvements.',
    specificGoal: 'ZERO WASTE',
    keyPoints: ['Matrix A/B/C/D', 'Loss Identification', 'Cost Calculation'],
    chemicalContext: 'Material balances to find yield losses in distillation trains.',
    steps: [
      { title: 'Cost Definition', detail: 'Identify and break down all manufacturing costs including energy, raw materials, and process utilities.' },
      { title: 'Loss Identification', detail: 'Systematically list all qualitative wastes and physical losses observed across the production line (Matrix A).' },
      { title: 'Loss vs. Pillar Mapping', detail: 'Correlate identified process losses to specific technical pillars for accountability (Matrix B).' },
      { title: 'Financial Quantification', detail: 'Translate physical losses (kg, kWh, hours) into actual monetary impact using plant cost data (Matrix C).' },
      { title: 'Project Selection', detail: 'Prioritize improvement projects based on the highest potential ROI and loss reduction magnitude (Matrix D).' },
      { title: 'Progress Monitoring', detail: 'Track the real-time financial benefits of ongoing improvement projects against the initial cost baseline.' },
      { title: 'Budget Re-alignment', detail: 'Integrate verified financial savings back into the plant’s strategic financial planning and forecasting.' }
    ]
  },
  {
    id: 'focused-improvement',
    title: 'Focused Improvement',
    icon: '🎯',
    color: 'bg-orange-500',
    description: 'Methodical reduction of losses through rigorous problem-solving tools.',
    specificGoal: 'ZERO LOSSES',
    keyPoints: ['5-Why', 'Ishikawa', 'Stratification', 'PDCA'],
    chemicalContext: 'Optimizing reaction kinetics and batch cycle times.',
    steps: [
      { title: 'Target Selection', detail: 'Select specific, high-impact themes based on the results of the Cost Deployment analysis.' },
      { title: 'Situation Understanding', detail: 'Gather granular process data and perform stratification to narrow the problem focus to a single point.' },
      { title: 'Goal Setting', detail: 'Establish SMART targets and assemble a cross-functional team including engineering and operations.' },
      { title: 'Root Cause Investigation', detail: 'Utilize 5-Why, Ishikawa, and stratification tools to pinpoint the fundamental technical failure.' },
      { title: 'Solution Execution', detail: 'Design and implement technical or procedural changes to permanently eliminate the root cause.' },
      { title: 'Effectiveness Review', detail: 'Validate the success of the solution by measuring performance against the project baseline over time.' },
      { title: 'Standardization', detail: 'Update site SOPs and horizontally expand the proven solution to other similar reactors or process lines.' }
    ]
  },
  {
    id: 'autonomous-maintenance',
    title: 'Autonomous Maintenance',
    icon: '🔧',
    color: 'bg-red-400',
    description: 'Empowering operators to take ownership of their equipment.',
    specificGoal: 'ZERO BREAKDOWNS',
    keyPoints: ['CIL', 'Jishu Hozen', 'Inspection', 'Cleaning'],
    chemicalContext: 'Operators checking pump seals and steam traps.',
    steps: [
      { title: 'Initial Cleaning', detail: 'Conduct a deep clean of the equipment to reveal hidden defects like minor leaks, cracks, or loose fittings.' },
      { title: 'Source Countermeasures', detail: 'Identify and eliminate sources of contamination and redesign areas that are difficult to access for cleaning.' },
      { title: 'Provisional CIL Standards', detail: 'Develop temporary Cleaning, Inspection, and Lubrication standards managed by the operators themselves.' },
      { title: 'General Inspection Training', detail: 'Educate operators on basic mechanical, pneumatic, and hydraulic systems relevant to their process unit.' },
      { title: 'Autonomous Inspection', detail: 'Establish final, refined CIL standards and ensure operators perform them with high technical proficiency.' },
      { title: 'Standardization & Organization', detail: 'Optimize workplace tools and visual management to support efficient daily maintenance activities.' },
      { title: 'Full Autonomous Management', detail: 'Achieve a state where operators take complete responsibility for the health and performance of their assets.' }
    ]
  },
  {
    id: 'quality-control',
    title: 'Quality Control',
    icon: '🧪',
    color: 'bg-purple-500',
    description: 'Aiming for Zero Defects by building quality into the process.',
    specificGoal: 'ZERO DEFECTS',
    keyPoints: ['QA Matrix', '4M', 'Poka-Yoke', 'SPC'],
    chemicalContext: 'Maintaining precise pH and temperature profiles for purity.',
    steps: [
      { title: 'Defect Analysis', detail: 'Perform statistical analysis of quality deviations to identify the most frequent chemical or physical defects.' },
      { title: 'Restoration of Baselines', detail: 'Fix equipment deterioration that is directly causing variability in the final product specifications.' },
      { title: '4M Root Cause Analysis', detail: 'Analyze how Man, Machine, Material, and Method interact to create quality inconsistencies.' },
      { title: 'Conditions for Zero Defects', detail: 'Identify the exact equipment settings (QA Matrix) required to guarantee a 100% defect-free batch.' },
      { title: 'Conditions Maintenance', detail: 'Set up rigorous monitoring to ensure that the identified quality-critical parameters never deviate.' },
      { title: 'Mistake-Proofing', detail: 'Implement Poka-Yoke hardware or software solutions to prevent quality errors from human or system failure.' },
      { title: 'QA Self-Management', detail: 'Shift the primary quality monitoring role from the lab to the shop floor via real-time process control.' }
    ]
  },
  {
    id: 'professional-maintenance',
    title: 'Professional Maintenance',
    icon: '⚙️',
    color: 'bg-gray-700',
    description: 'Technical maintenance aimed at extending equipment life.',
    specificGoal: 'ZERO BREAKDOWNS',
    keyPoints: ['MTBF/MTTR', 'Preventative', 'Predictive', 'Spare Parts'],
    chemicalContext: 'Vibration analysis on compressors and corrosion monitoring.',
    steps: [
      { title: 'Asset Criticality Review', detail: 'Rank all plant assets by their impact on safety, quality, and production to prioritize maintenance spend.' },
      { title: 'Health Restoration', detail: 'Execute major repairs and overhauls to return critical equipment to its original "as-new" design condition.' },
      { title: 'Information Management', detail: 'Build a robust computerized system to track all failure data, MTBF, MTTR, and maintenance costs.' },
      { title: 'Periodic Maintenance', detail: 'Design and implement time-based maintenance schedules for components prone to wear and tear.' },
      { title: 'Predictive Maintenance', detail: 'Integrate advanced condition monitoring like oil analysis and vibration tracking to catch failures early.' },
      { title: 'Efficiency Optimization', detail: 'Analyze the cost-effectiveness of maintenance activities and optimize spare parts inventory levels.' },
      { title: 'Advanced Asset Strategy', detail: 'Focus on improving equipment reliability through design modifications based on historical failure data.' }
    ]
  },
  {
    id: 'logistics',
    title: 'Logistics',
    icon: '🚛',
    color: 'bg-indigo-500',
    description: 'Optimization of material flow from suppliers to customers.',
    specificGoal: 'ZERO INVENTORY WASTE',
    keyPoints: ['Kanban', 'VSM', 'Lead Time', 'Milk-runs'],
    chemicalContext: 'Tank farm inventory management and bulk unloading.',
    steps: [
      { title: 'Value Stream Mapping', detail: 'Document the end-to-end flow of materials and information to identify all logistical non-value-added steps.' },
      { title: 'Material Flow Improvement', detail: 'Optimize plant layout and chemical delivery paths to minimize handling time and secondary movements.' },
      { title: 'Synchronized Production', detail: 'Establish a "Pull" system to align production rates with actual customer demand and minimize buffer tanks.' },
      { title: 'Internal Logistics Delivery', detail: 'Implement standardized delivery routes (Milk-runs) to ensure materials arrive at the line exactly when needed.' },
      { title: 'Supplier Integration', detail: 'Work with raw material vendors to establish Just-In-Time (JIT) delivery and reduce on-site storage requirements.' },
      { title: 'Distribution Optimization', detail: 'Enhance finished product shipping and warehousing to ensure on-time delivery with zero loading errors.' },
      { title: 'Total Lead Time Compression', detail: 'Continuously reduce the total time from order entry to delivery through systematic flow improvements.' }
    ]
  },
  {
    id: 'people-development',
    title: 'People Development',
    icon: '🎓',
    color: 'bg-yellow-500',
    description: 'Ensuring every employee has the right skills.',
    specificGoal: 'ZERO SKILL GAPS',
    keyPoints: ['Skill Matrix', 'OPL', 'Dojo', 'Training'],
    chemicalContext: 'DCS operation training and HAZMAT handling.',
    steps: [
      { title: 'Policy Establishment', detail: 'Define a long-term vision for human capital development that supports the plant’s excellence journey.' },
      { title: 'Skill Gap Analysis', detail: 'Deploy a multi-level Skill Matrix to visualize current competencies versus the required technical standards.' },
      { title: 'Fundamental Training', detail: 'Ensure all staff possess basic operational, safety, and literacy skills required for a high-performance site.' },
      { title: 'Technical Specialization', detail: 'Develop deep expertise in specific process areas, instrumentation, and core WCM methodologies.' },
      { title: 'Leadership Development', detail: 'Train supervisors and managers in the soft skills required to coach and lead autonomous teams effectively.' },
      { title: 'Certification System', detail: 'Implement a formal evaluation process to certify employees as they reach higher tiers of technical mastery.' },
      { title: 'Continuous Coaching', detail: 'Create a sustainable culture where experts mentor juniors via One Point Lessons and hands-on guidance.' }
    ]
  },
  {
    id: 'early-management',
    title: 'Early Equipment Mgmt',
    icon: '🏗️',
    color: 'bg-cyan-600',
    description: 'Designing new processes for reliability from day one.',
    specificGoal: 'ZERO START-UP LOSSES',
    keyPoints: ['LCC', 'MP Info', 'Vertical Start-up'],
    chemicalContext: 'Modular skid design and alloy selection for corrosion.',
    steps: [
      { title: 'Requirement Definition', detail: 'Capture all operational and maintenance requirements before the first draft of the project design.' },
      { title: 'Maintenance Prevention', detail: 'Design the new equipment to be easy to clean, inspect, and maintain based on past failures.' },
      { title: 'Life Cycle Costing', detail: 'Select designs that offer the lowest total cost of ownership, including energy and maintenance, over 10-20 years.' },
      { title: 'Fabrication Quality', detail: 'Monitor the construction phase closely to ensure the final product matches the reliability-focused design specs.' },
      { title: 'Installation Readiness', detail: 'Perform rigorous pre-commissioning checks on all safety and quality interlocks before the first startup.' },
      { title: 'Vertical Start-up', detail: 'Achieve target production capacity and quality levels within days, rather than weeks, of initial commissioning.' },
      { title: 'Experience Feedback', detail: 'Analyze start-up performance and feedback lessons learned into the next capital project cycle.' }
    ]
  },
  {
    id: 'environment',
    title: 'Environment',
    icon: '🍃',
    color: 'bg-emerald-500',
    description: 'Zero impact on the environment.',
    specificGoal: 'ZERO EMISSIONS',
    keyPoints: ['ISO 50001', 'Carbon Footprint', 'Water Stewardship'],
    chemicalContext: 'WWTP performance and steam boiler efficiency.',
    steps: [
      { title: 'Environmental Scan', detail: 'Identify every environmental aspect and impact of the plant, from carbon emissions to wastewater.' },
      { title: 'Legal Compliance', detail: 'Establish a rigorous system to ensure 100% adherence to all local and international environmental regulations.' },
      { title: 'Waste Segregation', detail: 'Implement a zero-landfill strategy through comprehensive recycling and hazardous waste minimization programs.' },
      { title: 'Energy Management', detail: 'Deploy ISO 50001 standards to monitor and reduce energy intensity across all major process units.' },
      { title: 'Emissions Reduction', detail: 'Invest in advanced filtration and treatment technologies to eliminate process pollutants at the source.' },
      { title: 'Resource Conservation', detail: 'Launch innovative projects to recover waste heat and reuse process water within the manufacturing cycle.' },
      { title: 'Sustainability Culture', detail: 'Achieve a state where every employee proactively identifies and mitigates environmental risks in their area.' }
    ]
  }
];

export const TPM_PILLARS: Pillar[] = [
  {
    id: 'tpm-am',
    title: 'Autonomous Maintenance',
    icon: '🛠️',
    color: 'bg-red-500',
    description: 'Maintenance activities performed by operators to prevent deterioration.',
    specificGoal: 'ZERO BREAKDOWNS',
    keyPoints: ['Clean-Inspect-Lubricate', 'Restoration', 'Abnormality Detection'],
    chemicalContext: 'Operators detecting abnormal vibration in agitators before failure.',
    steps: [
      { title: 'Initial Cleaning', detail: 'Eliminate dirt and dust from equipment to expose defects like cracks and leaks.' },
      { title: 'Contamination Control', detail: 'Redesign or shield parts of the process that generate waste or are hard to clean.' },
      { title: 'CIL Standards', detail: 'Operators define their own daily routines for Cleaning, Inspection, and Lubrication.' },
      { title: 'General Inspection', detail: 'Technical training for operators to understand how their machine actually works mechanically.' },
      { title: 'Autonomous Inspection', detail: 'Establish definitive checklists and tools for daily machine health monitoring.' },
      { title: 'Standardization', detail: 'Optimize the shop floor layout and tool storage to support fast maintenance tasks.' },
      { title: 'Full Autonomy', detail: 'Operators manage the entire asset lifecycle, including minor repairs and improvement projects.' }
    ]
  },
  {
    id: 'tpm-pm',
    title: 'Planned Maintenance',
    icon: '🗓️',
    color: 'bg-blue-700',
    description: 'Structured maintenance tasks based on frequency and condition.',
    specificGoal: 'ZERO BREAKDOWNS',
    keyPoints: ['PM Schedules', 'Spare Parts Mgmt', 'TBO Optimization'],
    chemicalContext: 'Scheduled internal inspections of pressure vessels and heat exchangers.',
    steps: [
      { title: 'Status Assessment', detail: 'Review equipment history and failure modes to determine the current reliability baseline.' },
      { title: 'Baseline Restoration', detail: 'Perform major maintenance to return critical assets to their original operating specifications.' },
      { title: 'Data Management', detail: 'Establish a system to track all failure events, repair times, and maintenance costs per asset.' },
      { title: 'Periodic Maintenance', detail: 'Develop and execute time-based maintenance routines for wear-prone components.' },
      { title: 'Predictive Maintenance', detail: 'Use condition-based monitoring such as ultrasound and oil analysis to predict failures.' },
      { title: 'System Optimization', detail: 'Analyze the effectiveness of the maintenance plan and optimize the spare parts stocking strategy.' },
      { title: 'Equipment Improvement', detail: 'Modify equipment designs to increase life span and simplify future maintenance tasks.' }
    ]
  },
  {
    id: 'tpm-qm',
    title: 'Quality Maintenance',
    icon: '💎',
    color: 'bg-purple-600',
    description: 'Achieving zero quality defects through equipment state maintenance.',
    specificGoal: 'ZERO DEFECTS',
    keyPoints: ['Machine-Material-Method', 'QA Matrix', 'Control Points'],
    chemicalContext: 'Ensuring centrifuge speed accuracy to maintain crystal size distribution.',
    steps: [
      { title: 'Defect Analysis', detail: 'Categorize quality defects by phenomena and link them back to specific process units.' },
      { title: 'Machine Restoration', detail: 'Fix equipment issues that are proven to cause variability in final product quality.' },
      { title: 'Parameter Identification', detail: 'Define the specific machine parameters that must be controlled to prevent defects (QA Matrix).' },
      { title: 'Control Point Setup', detail: 'Implement physical checks and instrumentation to monitor critical quality parameters.' },
      { title: 'Operating Standards', detail: 'Develop strict procedures to ensure that the process stays within the identified quality window.' },
      { title: 'Error Proofing', detail: 'Implement technical interlocks to ensure the process cannot run if quality settings are wrong.' },
      { title: 'Self-QA System', detail: 'Empower production teams to perform their own quality checks and adjust the process in real-time.' }
    ]
  },
  {
    id: 'tpm-fi',
    title: 'Focused Improvement',
    icon: '⚡',
    color: 'bg-orange-600',
    description: 'Eliminating the 16 major losses in manufacturing.',
    specificGoal: 'ZERO LOSSES',
    keyPoints: ['Kobetsu Kaizen', 'Loss Mapping', 'Root Cause'],
    chemicalContext: 'Eliminating frequent tripping of a critical synthesis gas compressor.',
    steps: [
      { title: 'Topic Selection', detail: 'Select a theme for improvement based on the most significant OEE loss on the plant floor.' },
      { title: 'Baseline Measurement', detail: 'Calculate the exact frequency, duration, and financial cost of the targeted loss.' },
      { title: 'Analysis of Phenomena', detail: 'Deconstruct the problem to understand the physics and chemistry behind the failure.' },
      { title: 'Root Cause Finding', detail: 'Use Why-Why analysis to dig past symptoms to the fundamental process flaw.' },
      { title: 'Countermeasure Design', detail: 'Design technical or behavioral changes to permanently block the failure from recurring.' },
      { title: 'Result Validation', detail: 'Measure the impact over time to ensure the improvement is stable and sustained.' },
      { title: 'System Update', detail: 'Update plant-wide documentation and share the solution with other relevant departments.' }
    ]
  },
  {
    id: 'tpm-et',
    title: 'Training & Education',
    icon: '📖',
    color: 'bg-yellow-600',
    description: 'Developing multi-skilled employees to support TPM activities.',
    specificGoal: 'ZERO ERRORS',
    keyPoints: ['Skills Audit', 'Training Plan', 'Knowledge Retention'],
    chemicalContext: 'Training operators on emergency shutdown (ESD) procedures.',
    steps: [
      { title: 'Skills Inventory', detail: 'Assess the current technical and operational knowledge levels of the entire staff.' },
      { title: 'Gap Identification', detail: 'Determine what new skills are needed to support the plant’s TPM and reliability goals.' },
      { title: 'Training Roadmap', detail: 'Create a structured schedule for technical workshops, safety drills, and OPL sessions.' },
      { title: 'Implementation', detail: 'Conduct the training using hands-on "Dojo" centers and experienced peer mentors.' },
      { title: 'Certification', detail: 'Test and formally certify employees as they master specific operational or technical domains.' },
      { title: 'Knowledge Management', detail: 'Build a library of One Point Lessons (OPLs) to preserve critical process knowledge.' },
      { title: 'Mentorship Culture', detail: 'Foster an environment where senior staff are incentivized to train and develop their juniors.' }
    ]
  },
  {
    id: 'tpm-she',
    title: 'Safety, Health & Env',
    icon: '🏥',
    color: 'bg-green-600',
    description: 'Creating a safe workplace and zero environmental impact.',
    specificGoal: 'ZERO ACCIDENTS',
    keyPoints: ['EHS Policy', 'Hazard Mapping', 'Emergency Prep'],
    chemicalContext: 'Spill containment drills and fugitive emission monitoring.',
    steps: [
      { title: 'Hazard Mapping', detail: 'Identify and map every physical, chemical, and ergonomic hazard across the facility.' },
      { title: 'Risk Elimination', detail: 'Prioritize and implement physical engineering controls to remove high-risk areas.' },
      { title: 'Safety Procedures', detail: 'Standardize lockout-tagout (LOTO) and high-risk work permits for all staff.' },
      { title: 'Environmental Control', detail: 'Deploy monitoring systems to ensure all emissions and wastes stay within legal limits.' },
      { title: 'Emergency Drill', detail: 'Regularly train and drill for chemical spills, fires, and other emergency scenarios.' },
      { title: 'Occupational Health', detail: 'Monitor long-term health factors like noise, chemical exposure, and ergonomics.' },
      { title: 'Cultural Maturity', detail: 'Achieve a state where safety is seen as a value, not just a set of rules to follow.' }
    ]
  },
  {
    id: 'tpm-eem',
    title: 'Early Equipment Mgmt',
    icon: '🏗️',
    color: 'bg-cyan-700',
    description: 'Shortening the development time for new equipment.',
    specificGoal: 'ZERO START-UP DELAY',
    keyPoints: ['MP Information', 'LCC Analysis', 'Reliability Design'],
    chemicalContext: 'Commissioning a new pilot plant with zero leaks on day one.',
    steps: [
      { title: 'Maintenance Prevention', detail: 'Apply data from existing machine failures to the design of new process equipment.' },
      { title: 'Design Review', detail: 'Analyze the new design for ease of operation, cleaning access, and spare parts commonality.' },
      { title: 'Vendor Management', detail: 'Ensure that manufacturers follow the plant’s specific reliability and safety standards.' },
      { title: 'Pre-Commissioning', detail: 'Execute thorough functional tests on all systems before the first chemical charge.' },
      { title: 'Startup Optimization', detail: 'Monitor the initial operation closely to identify and fix teething issues immediately.' },
      { title: 'Operator Readiness', detail: 'Provide deep-dive training on the new technology before the production handover.' },
      { title: 'Post-Project Audit', detail: 'Review the start-up success and document improvements for the next project cycle.' }
    ]
  },
  {
    id: 'tpm-admin',
    title: 'Administrative TPM',
    icon: '📁',
    color: 'bg-slate-500',
    description: 'Applying TPM principles to administrative and support functions.',
    specificGoal: 'ZERO OFFICE LOSSES',
    keyPoints: ['Process Flow', 'Info Quality', 'Efficiency'],
    chemicalContext: 'Improving the procurement cycle for urgent catalyst replacements.',
    steps: [
      { title: 'Process Inventory', detail: 'Map out the major administrative flows, such as purchasing and maintenance planning.' },
      { title: 'Administrative Waste', detail: 'Identify delays, data errors, and redundant approval steps in office workflows.' },
      { title: 'Standardization', detail: 'Create standardized forms and digital paths for all administrative requests.' },
      { title: 'Digital Automation', detail: 'Implement software tools to eliminate manual data entry and track task status.' },
      { title: 'Competency Building', detail: 'Train office staff in data analysis and basic manufacturing methodology concepts.' },
      { title: 'Lead Time Reduction', detail: 'Continuously measure and compress the time it takes to process critical site requests.' },
      { title: 'Self-Improving Office', detail: 'Office teams take ownership of their own process performance and improvement cycles.' }
    ]
  }
];

export const TQM_PILLARS: Pillar[] = [
  {
    id: 'tqm-customer',
    title: 'Customer Focus',
    icon: '🤝',
    color: 'bg-blue-500',
    description: 'The customer ultimately determines the level of quality.',
    specificGoal: '100% SATISFACTION',
    keyPoints: ['VOC', 'Feedback Loops', 'Quality Specs'],
    chemicalContext: 'Meeting ultra-high purity specs for pharmaceutical ingredients.',
    steps: [
      { title: 'Customer Identification', detail: 'Clearly define who the internal and external customers are for each process stage.' },
      { title: 'Voice of Customer', detail: 'Gather feedback through surveys and direct meetings to understand exact quality needs.' },
      { title: 'Requirement Mapping', detail: 'Translate qualitative customer needs into quantitative manufacturing specifications.' },
      { title: 'Quality Benchmark', detail: 'Compare current product performance against market leaders to set target levels.' },
      { title: 'Process Alignment', detail: 'Adjust chemical recipes and settings to ensure the target specs are hit consistently.' },
      { title: 'Delivery Integration', detail: 'Ensure that packaging and shipping meet the customer’s logistical requirements.' },
      { title: 'Continuous Feedback', detail: 'Establish a permanent loop where customer complaints are fed directly into the FI pillar.' }
    ]
  },
  {
    id: 'tqm-employee',
    title: 'Total Involvement',
    icon: '👥',
    color: 'bg-indigo-600',
    description: 'All employees participate in working toward common goals.',
    specificGoal: '100% ENGAGEMENT',
    keyPoints: ['Quality Circles', 'Empowerment', 'Suggestion System'],
    chemicalContext: 'Shift-wide participation in energy conservation initiatives.',
    steps: [
      { title: 'Management Vision', detail: 'Leaders clearly communicate that quality is the responsibility of every single person.' },
      { title: 'Quality Circles', detail: 'Enable small teams to meet regularly to solve quality issues in their local areas.' },
      { title: 'Employee Suggestion', detail: 'Implement a system where operators can submit and track their own improvement ideas.' },
      { title: 'Incentive Structure', detail: 'Align employee rewards with the achievement of site quality and performance goals.' },
      { title: 'Cross-Training', detail: 'Develop staff so they understand how their work affects downstream departments.' },
      { title: 'Empowerment Policy', detail: 'Grant authority to operators to halt production if they detect a quality deviation.' },
      { title: 'Sustainability Culture', detail: 'Create a workplace where quality pride is part of the daily professional identity.' }
    ]
  },
  {
    id: 'tqm-process',
    title: 'Process-Centered',
    icon: '🔄',
    color: 'bg-purple-700',
    description: 'Focusing on process design and improvement as the key to quality.',
    specificGoal: 'ZERO VARIATION',
    keyPoints: ['SOPs', 'Process Control', 'Control Charts'],
    chemicalContext: 'Standardizing start-up/shutdown sequences for a cracker.',
    steps: [
      { title: 'Process Documentation', detail: 'Document every step of the chemical transformation with clear visual SOPs.' },
      { title: 'Variable Identification', detail: 'Define which process variables (temp, pressure, flow) drive final quality.' },
      { title: 'Control Limit Setup', detail: 'Establish tight operating windows for all quality-critical process variables.' },
      { title: 'Instrumentation Check', detail: 'Ensure all sensors are calibrated and providing accurate real-time data.' },
      { title: 'Process Optimization', detail: 'Use statistical design of experiments (DOE) to find the absolute best operating point.' },
      { title: 'Stability Monitoring', detail: 'Use SPC charts to ensure the process remains within statistical control over time.' },
      { title: 'Change Control', detail: 'Implement a rigorous system to manage any modifications to the process or equipment.' }
    ]
  },
  {
    id: 'tqm-system',
    title: 'Integrated System',
    icon: '🔗',
    color: 'bg-teal-600',
    description: 'Connecting different functional processes into a cohesive system.',
    specificGoal: 'TOTAL ALIGNMENT',
    keyPoints: ['ISO 9001', 'Cross-functional', 'Value Stream'],
    chemicalContext: 'Linking Lab R&D with Production and Supply Chain quality data.',
    steps: [
      { title: 'Strategic Integration', detail: 'Connect the plant’s quality goals with the overall business vision and mission.' },
      { title: 'Information Flow Design', detail: 'Ensure that quality data flows seamlessly between the lab, floor, and sales office.' },
      { title: 'Standard Convergence', detail: 'Align all local operating procedures with international standards like ISO 9001.' },
      { title: 'Departmental Sync', detail: 'Resolve conflicts between production volume and quality through shared KPIs.' },
      { title: 'Total Data Visibility', detail: 'Implement real-time dashboards so everyone can see current site quality performance.' },
      { title: 'Network Optimization', detail: 'Improve the interaction points between different plant sections to prevent silos.' },
      { title: 'Continuous System Review', detail: 'Management performs regular audits to ensure the integrated system remains effective.' }
    ]
  },
  {
    id: 'tqm-strategic',
    title: 'Strategic Approach',
    icon: '🗺️',
    color: 'bg-rose-600',
    description: 'Systematic approach to achieving an organization’s vision and mission.',
    specificGoal: 'ZERO VISION DEVIATION',
    keyPoints: ['Strategic Plan', 'KPIs', 'Long-term Goals'],
    chemicalContext: 'Planning long-term shift towards green hydrogen feedstocks.',
    steps: [
      { title: 'Vision Casting', detail: 'Define what "Manufacturing Excellence" means for the site over a 5-10 year horizon.' },
      { title: 'Strategic Roadmap', detail: 'Identify the sequence of pillar implementations and technology investments needed.' },
      { title: 'Objective Deployment', detail: 'Cascade high-level strategic goals down to team and individual targets (Hoshin Kanri).' },
      { title: 'Resource Planning', detail: 'Allocate the budget, time, and people required to hit the strategic milestones.' },
      { title: 'Project Governance', detail: 'Establish a project office to track and drive the execution of strategic initiatives.' },
      { title: 'Progress Audit', detail: 'Hold quarterly reviews to adjust the strategy based on market and internal results.' },
      { title: 'Leadership Continuity', detail: 'Ensure a succession plan is in place to maintain the excellence journey long-term.' }
    ]
  },
  {
    id: 'tqm-continual',
    title: 'Continual Improvement',
    icon: '📈',
    color: 'bg-green-700',
    description: 'Continuously seeking ways to be more competitive and effective.',
    specificGoal: 'ZERO STAGNATION',
    keyPoints: ['Kaizen', 'PDCA', 'Small Wins'],
    chemicalContext: 'Iterative optimization of catalyst life in a reformer.',
    steps: [
      { title: 'Awareness Building', detail: 'Train all staff to view every deviation from the standard as an improvement opportunity.' },
      { title: 'Daily Kaizen', detail: 'Implement a culture where operators perform small, daily improvements in their areas.' },
      { title: 'PDCA Cycle Mastery', detail: 'Ensure that the Plan-Do-Check-Act loop is used for every single improvement activity.' },
      { title: 'Major Projects', detail: 'Launch cross-functional teams to tackle complex, systemic process bottlenecks.' },
      { title: 'Standard Standardization', detail: 'Regularly update existing standards as new "best ways" are discovered.' },
      { title: 'Horizontal Sharing', detail: 'Build a portal to share successful improvements across different plant areas.' },
      { title: 'Unending Optimization', detail: 'Adopt the philosophy that the current best way is only temporary until a better way is found.' }
    ]
  },
  {
    id: 'tqm-fact',
    title: 'Fact-Based Decision',
    icon: '📑',
    color: 'bg-yellow-700',
    description: 'Decisions based on data and analysis rather than assumptions.',
    specificGoal: 'ZERO ASSUMPTION ERRORS',
    keyPoints: ['Big Data', 'Stats', 'Dashboarding'],
    chemicalContext: 'Using multivariate analysis to solve complex batch deviations.',
    steps: [
      { title: 'Data Source Verification', detail: 'Audit all plant sensors and lab tests to ensure they provide accurate and trustworthy data.' },
      { title: 'Automated Harvesting', detail: 'Connect the DCS and Lab systems to a central database for unified analysis.' },
      { title: 'Statistical Toolkit', detail: 'Equip engineers and managers with tools like ANOVA, regression, and Pareto analysis.' },
      { title: 'Evidence-Based Approvals', detail: 'Establish a rule that all process changes must be backed by a data-driven justification.' },
      { title: 'Visual Dashboards', detail: 'Use simple, visual charts to present complex data to the entire shop floor.' },
      { title: 'Decision Post-Audit', detail: 'Follow up on major decisions to see if the data-based predictions were accurate.' },
      { title: 'Predictive Modeling', detail: 'Use advanced analytics to simulate process changes before they are implemented physically.' }
    ]
  },
  {
    id: 'tqm-comm',
    title: 'Communications',
    icon: '📢',
    color: 'bg-sky-600',
    description: 'Effective communication at all levels to maintain morale.',
    specificGoal: 'ZERO MISCOMMUNICATION',
    keyPoints: ['Transparency', 'Channels', 'Feedback'],
    chemicalContext: 'Shift handover accuracy and emergency alert systems.',
    steps: [
      { title: 'Stakeholder Analysis', detail: 'Identify all parties that need process information, from operators to senior executives.' },
      { title: 'Channel Selection', detail: 'Define which information goes through which channel (digital, huddle, email).' },
      { title: 'Transparency Mandate', detail: 'Share the plant’s real-time performance and financial status with all employees.' },
      { title: 'Two-Way Feedback', detail: 'Establish safe, open methods for operators to provide feedback to plant management.' },
      { title: 'Standard Meeting Formats', detail: 'Use structured templates for shift handovers and weekly performance reviews.' },
      { title: 'Emergency Messaging', detail: 'Optimize fast-track alert systems for critical safety or environmental events.' },
      { title: 'Clarity Verification', detail: 'Regularly audit site communications to ensure the intended message is being received correctly.' }
    ]
  }
];

export const FRAMEWORKS: Record<FrameworkType, Pillar[]> = {
  WCM: WCM_PILLARS,
  TPM: TPM_PILLARS,
  TQM: TQM_PILLARS
};

export const MANAGERIAL_PILLARS = [
  "Management Commitment",
  "Competence of Organization",
  "Route Map to WCM",
  "Allocation of Highly Qualified People",
  "Level of Detail",
  "Level of Expansion",
  "Goal Alignment",
  "Motivation of Operators",
  "Persistence / Consistency",
  "Environment & Energy Consciousness"
];
