import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import type { Product, Category } from "@/types";
import rockwellHardnessTester from "@/assets/products/rockwell-hardness-tester.png";
import brinellHardnessTester from "@/assets/products/brinell-hardness-tester.png";
import vickersMicroHardnessTester from "@/assets/products/vickers-micro-hardness-tester.png";
import electromechanicalUtm from "@/assets/products/electromechanical-utm.png";
import servoHydraulicUtm from "@/assets/products/servo-hydraulic-utm.png";
import sandStrengthMachine from "@/assets/products/sand-strength-machine.png";
import digitalHeightGauge from "@/assets/products/digital-height-gauge.png";
import ultrasonicFlawDetector from "@/assets/products/ultrasonic-flaw-detector.png";
import charpyImpactTester from "@/assets/products/charpy-impact-tester.png";
import compressionTestingMachine from "@/assets/products/compression-testing-machine.png";
import metallurgicalMicroscope from "@/assets/products/metallurgical-microscope.png";
import abrasiveCutter from "@/assets/products/abrasive-cutter.png";
import profileProjector from "@/assets/products/profile-projector.png";

export const categories: Category[] = [
  { slug: "hardness-testing", name: "Hardness Testing", description: "Rockwell, Brinell, Vickers and Micro-hardness testers for metals, plastics and composites.", icon: "Gauge", productCount: 8 },
  { slug: "universal-testing-machines", name: "Universal Testing Machines", description: "Servo-hydraulic and electromechanical UTMs for tensile, compression and flexure tests.", icon: "ArrowUpDown", productCount: 6 },
  { slug: "sand-testing", name: "Sand Testing", description: "Complete range of foundry sand testing instruments for quality assurance.", icon: "FlaskConical", productCount: 5 },
  { slug: "metrology", name: "Metrology", description: "Precision measuring instruments including CMMs, height gauges and surface roughness testers.", icon: "Ruler", productCount: 7 },
  { slug: "ndt-equipment", name: "NDT Equipment", description: "Ultrasonic flaw detectors, magnetic particle and dye penetrant inspection systems.", icon: "ScanSearch", productCount: 6 },
  { slug: "impact-testing", name: "Impact Testing", description: "Charpy and Izod impact testers with digital readout and automated sample feeding.", icon: "Hammer", productCount: 4 },
  { slug: "civil-lab", name: "Civil Lab", description: "Concrete, cement and soil testing equipment for construction quality control.", icon: "Building2", productCount: 9 },
  { slug: "microscopes", name: "Microscopes", description: "Metallurgical, stereo and digital microscopes for material analysis.", icon: "Microscope", productCount: 5 },
  { slug: "sample-preparation", name: "Sample Preparation", description: "Cutting, mounting, grinding and polishing machines for metallographic samples.", icon: "Scissors", productCount: 6 },
  { slug: "profile-projector", name: "Profile Projector", description: "Optical profile projectors for dimensional measurement and contour inspection.", icon: "Projector", productCount: 3 },
];

export const products: Product[] = [
  {
    id: "ht-01", name: "Digital Rockwell Hardness Tester", model: "RHT-500D", category: "Hardness Testing", categorySlug: "hardness-testing", slug: "digital-rockwell-hardness-tester",
    image: rockwellHardnessTester, description: "High-precision digital Rockwell hardness tester with automatic load application and result display.",
    features: ["Auto load/dwell/unload cycle", "LCD touch screen", "USB data export", "Built-in printer"],
    specifications: { "Test Scales": "HRA, HRB, HRC", "Max Height": "400 mm", "Throat Depth": "165 mm", "Load Accuracy": "±0.5%", "Power": "220V / 50Hz" },
    applications: ["Metals", "Heat-treated parts", "Hardened steel"]
  },
  {
    id: "ht-02", name: "Brinell Hardness Tester", model: "BHT-3000", category: "Hardness Testing", categorySlug: "hardness-testing", slug: "brinell-hardness-tester",
    image: brinellHardnessTester, description: "Robust Brinell hardness tester for heavy-duty applications with optical measurement system.",
    features: ["3000 kgf max load", "Optical measurement", "Motorized turret", "Heavy-duty frame"],
    specifications: { "Test Force": "187.5–3000 kgf", "Ball Diameter": "2.5, 5, 10 mm", "Max Height": "400 mm", "Power": "220V / 50Hz" },
    applications: ["Castings", "Forgings", "Large components"]
  },
  {
    id: "ht-03", name: "Vickers Micro-Hardness Tester", model: "VHT-1000", category: "Hardness Testing", categorySlug: "hardness-testing", slug: "vickers-micro-hardness-tester",
    image: vickersMicroHardnessTester, description: "Precision Vickers/Knoop micro-hardness tester with digital imaging and auto-indent measurement.",
    features: ["Auto-measure software", "10x/40x objectives", "Digital camera", "Motorized XY stage"],
    specifications: { "Test Force": "10–1000 gf", "Objectives": "10x, 40x", "Display": "12\" LCD", "Power": "220V / 50Hz" },
    applications: ["Thin coatings", "Weld zones", "Micro-structures"]
  },
  {
    id: "utm-01", name: "Electromechanical UTM", model: "UTM-100E", category: "Universal Testing Machines", categorySlug: "universal-testing-machines", slug: "electromechanical-utm",
    image: electromechanicalUtm, description: "Versatile electromechanical universal testing machine for tensile, compression, and flexure testing.",
    features: ["PC-controlled operation", "Auto extensometer", "Multiple grips", "Real-time graphing"],
    specifications: { "Capacity": "100 kN", "Speed Range": "0.001–500 mm/min", "Crosshead Travel": "1200 mm", "Accuracy": "±0.5%", "Power": "415V / 3 Phase" },
    applications: ["Metals", "Plastics", "Rubber", "Textiles"]
  },
  {
    id: "utm-02", name: "Servo-Hydraulic UTM", model: "UTM-600H", category: "Universal Testing Machines", categorySlug: "universal-testing-machines", slug: "servo-hydraulic-utm",
    image: servoHydraulicUtm, description: "High-capacity servo-hydraulic UTM for heavy-duty material testing applications.",
    features: ["Servo valve control", "Hydraulic grips", "Fatigue testing capable", "Multi-channel data acquisition"],
    specifications: { "Capacity": "600 kN", "Speed Range": "0.01–100 mm/min", "Piston Stroke": "250 mm", "Accuracy": "±0.5%", "Power": "415V / 3 Phase" },
    applications: ["Steel", "Concrete", "Composites", "Rebar"]
  },
  {
    id: "st-01", name: "Universal Sand Strength Machine", model: "SSM-200", category: "Sand Testing", categorySlug: "sand-testing", slug: "universal-sand-strength-machine",
    image: sandStrengthMachine, description: "Multi-purpose sand strength testing machine for foundry quality control.",
    features: ["Green/dry strength", "Shear/tensile modes", "Digital readout", "Specimen ejector"],
    specifications: { "Capacity": "200 kg", "Specimen Size": "50 mm dia", "Accuracy": "±1%", "Power": "220V / 50Hz" },
    applications: ["Foundries", "Casting plants"]
  },
  {
    id: "met-01", name: "Digital Height Gauge", model: "DHG-600", category: "Metrology", categorySlug: "metrology", slug: "digital-height-gauge",
    image: digitalHeightGauge, description: "High-precision digital height gauge with carbide-tipped scribers.",
    features: ["0.01mm resolution", "SPC output", "Motorized drive", "Air-bearing base"],
    specifications: { "Range": "0–600 mm", "Resolution": "0.01 mm", "Accuracy": "±0.02 mm", "Power": "Battery / USB" },
    applications: ["QC labs", "Tool rooms", "Production floors"]
  },
  {
    id: "ndt-01", name: "Ultrasonic Flaw Detector", model: "UFD-350", category: "NDT Equipment", categorySlug: "ndt-equipment", slug: "ultrasonic-flaw-detector",
    image: ultrasonicFlawDetector, description: "Portable digital ultrasonic flaw detector with full A-scan display.",
    features: ["DAC/TCG curves", "AWS D1.1 module", "IP67 rated", "8-hour battery"],
    specifications: { "Frequency": "0.5–20 MHz", "Range": "0–10,000 mm", "Display": "5.7\" TFT", "Weight": "1.2 kg" },
    applications: ["Weld inspection", "Forgings", "Aerospace"]
  },
  {
    id: "it-01", name: "Digital Charpy Impact Tester", model: "CIT-300D", category: "Impact Testing", categorySlug: "impact-testing", slug: "digital-charpy-impact-tester",
    image: charpyImpactTester, description: "Pendulum-type Charpy impact tester with digital energy measurement and temperature chamber.",
    features: ["Auto-zero correction", "Temperature chamber", "Digital encoder", "PC software"],
    specifications: { "Capacity": "300 J", "Pendulum Drop": "150°", "Specimen": "10×10×55 mm", "Accuracy": "±0.5%", "Power": "220V / 50Hz" },
    applications: ["Metals", "Plastics", "Ceramics"]
  },
  {
    id: "cl-01", name: "Compression Testing Machine", model: "CTM-2000", category: "Civil Lab", categorySlug: "civil-lab", slug: "compression-testing-machine",
    image: compressionTestingMachine, description: "Digital compression testing machine for concrete cubes and cylinders.",
    features: ["Auto pace rate", "Digital display", "Safety guard", "Printer interface"],
    specifications: { "Capacity": "2000 kN", "Platen Size": "200×200 mm", "Piston Stroke": "50 mm", "Accuracy": "±1%", "Power": "415V / 3 Phase" },
    applications: ["Concrete cubes", "Bricks", "Blocks"]
  },
  {
    id: "mic-01", name: "Inverted Metallurgical Microscope", model: "IMM-400", category: "Microscopes", categorySlug: "microscopes", slug: "inverted-metallurgical-microscope",
    image: metallurgicalMicroscope, description: "Research-grade inverted metallurgical microscope with trinocular head and image analysis.",
    features: ["Plan objectives", "Polarization", "DIC contrast", "Image analysis software"],
    specifications: { "Magnification": "50x–1000x", "Objectives": "5x,10x,20x,50x,100x", "Stage": "200×200 mm", "Camera": "18 MP" },
    applications: ["Metallography", "Grain analysis", "Phase identification"]
  },
  {
    id: "sp-01", name: "Abrasive Cutter", model: "AC-100", category: "Sample Preparation", categorySlug: "sample-preparation", slug: "abrasive-cutter",
    image: abrasiveCutter, description: "Heavy-duty abrasive cutter for metallographic sample sectioning.",
    features: ["Variable speed", "Coolant system", "Safety enclosure", "Vice clamping"],
    specifications: { "Wheel Diameter": "300 mm", "Cut Capacity": "100 mm", "Motor": "3 HP", "Power": "415V / 3 Phase" },
    applications: ["Metal samples", "Ceramic samples"]
  },
  {
    id: "pp-01", name: "Digital Profile Projector", model: "PP-300D", category: "Profile Projector", categorySlug: "profile-projector", slug: "digital-profile-projector",
    image: profileProjector, description: "Floor-standing profile projector with digital readout and edge detection.",
    features: ["DRO system", "Edge detection", "Surface/contour illumination", "Overlay charts"],
    specifications: { "Screen Diameter": "300 mm", "Magnification": "10x,20x,50x", "Stage Travel": "200×100 mm", "Accuracy": "±0.005 mm" },
    applications: ["Gear profiles", "Thread inspection", "Stamped parts"]
  },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(p => p.categorySlug === categorySlug);
}

export function getProduct(categorySlug: string, productSlug: string): Product | undefined {
  return products.find(p => p.categorySlug === categorySlug && p.slug === productSlug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}
