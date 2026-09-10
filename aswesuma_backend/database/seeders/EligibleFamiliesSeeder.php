<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EligibleFamiliesSeeder extends Seeder
{
    public function run(): void
    {
        $families = [
            // Westhole - 25 Records (15 Eligible, 5 Processing, 5 Not Eligible)
            ['ref_no' => 'HH-2-1-57-01-125-01230', 'name' => 'KANDASAMY RUKMANI', 'address' => 'WESTHOLE ESTATE KATABOOLA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Westhole'],
            ['ref_no' => 'HH-2-1-57-01-125-01231', 'name' => 'MARIYAYI SINNAIAH', 'address' => 'RILAGALA DIVISION WESTHOLE ESTATE', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Westhole'],
            ['ref_no' => 'HH-2-1-57-01-125-01232', 'name' => 'PERUMAL VALLIAMMAI', 'address' => 'BARCAPLE LOWER DIVISION KATABOOLA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Westhole'],
            ['ref_no' => 'HH-2-1-57-01-125-01233', 'name' => 'THANIGASALAM SAROJA', 'address' => 'NO 45/2 WESTHALL ESTATE', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Westhole'],
            ['ref_no' => 'HH-2-1-57-01-125-01234', 'name' => 'NAGARATNAM SIVANESAN', 'address' => 'ATHETON DIVISION WESTHOLE', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Westhole'],
            ['ref_no' => 'HH-2-1-57-01-125-01235', 'name' => 'MANIVANNAN PRIYA', 'address' => 'RELAGALA WESTHOLE ESTATE', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Westhole'],
            ['ref_no' => 'HH-2-1-57-01-125-01236', 'name' => 'SIVALINGAM KALAISELVI', 'address' => 'NO 112 BARCAPLE MIDDLE DIVISION', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Westhole'],
            ['ref_no' => 'HH-2-1-57-01-125-01237', 'name' => 'RAJENDRAN VASANTHI', 'address' => 'WESTHOLE ESTATE KATABOOLA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Westhole'],
            ['ref_no' => 'HH-2-1-57-01-125-01238', 'name' => 'MURUGAN CHANDRIKA', 'address' => 'RILAGALA DIVISION WESTHOLE', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Westhole'],
            ['ref_no' => 'HH-2-1-57-01-125-01239', 'name' => 'SIVAKUMAR ANUSUYA', 'address' => 'BARCAPLE UPPER DIVISION KATABOOLA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Westhole'],
            ['ref_no' => 'HH-2-1-57-01-125-01240', 'name' => 'PARAMANATHAN RAMANI', 'address' => 'WESTHOLE ESTATE NAWALAPITIYA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Westhole'],
            ['ref_no' => 'HH-2-1-57-01-125-01241', 'name' => 'KRISHNAN GEETHA', 'address' => 'NO 78 RELAGALA WESTHOLE', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Westhole'],
            ['ref_no' => 'HH-2-1-57-01-125-01242', 'name' => 'VELAUTHAM PUSHPARANI', 'address' => 'ATHETON WESTHOLE ESTATE', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Westhole'],
            ['ref_no' => 'HH-2-1-57-01-125-01243', 'name' => 'SUPPIAH MALATHY', 'address' => 'BARCAPLE DIVISION KATABOOLA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Westhole'],
            ['ref_no' => 'HH-2-1-57-01-125-01244', 'name' => 'THAMBIAH VIJAYALAKSHMI', 'address' => 'WESTHOLE LOWER DIVISION', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Westhole'],
            ['ref_no' => 'HH-2-1-57-01-125-01245', 'name' => 'RANJITH KUMARAN', 'address' => 'RILAGALA DIVISION WESTHOLE ESTATE', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Westhole'],
            ['ref_no' => 'HH-2-1-57-01-125-01246', 'name' => 'NADESAN SARASWATHY', 'address' => 'BARCAPLE MIDDLE DIVISION', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Westhole'],
            ['ref_no' => 'HH-2-1-57-01-125-01247', 'name' => 'PALANISAMY LETCHUMI', 'address' => 'WESTHOLE ESTATE KATABOOLA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Westhole'],
            ['ref_no' => 'HH-2-1-57-01-125-01248', 'name' => 'KUMARASAMY VIJAYA', 'address' => 'ATHETON DIVISION WESTHOLE', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Westhole'],
            ['ref_no' => 'HH-2-1-57-01-125-01249', 'name' => 'SINNIAH PARVATHI', 'address' => 'NO 89 RELAGALA WESTHOLE', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Westhole'],
            ['ref_no' => 'HH-2-1-57-01-125-01250', 'name' => 'RAJALINGAM RAMESH', 'address' => 'WESTHOLE ESTATE NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Westhole'],
            ['ref_no' => 'HH-2-1-57-01-125-01251', 'name' => 'MANOHARAN SELVI', 'address' => 'BARCAPLE DIVISION KATABOOLA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Westhole'],
            ['ref_no' => 'HH-2-1-57-01-125-01252', 'name' => 'GUNASEELAN PRIYANTHI', 'address' => 'RILAGALA WESTHOLE ESTATE', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Westhole'],
            ['ref_no' => 'HH-2-1-57-01-125-01253', 'name' => 'SIVAGNANAM CHANDRA', 'address' => 'NO 67 WESTHALL ESTATE', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Westhole'],
            ['ref_no' => 'HH-2-1-57-01-125-01254', 'name' => 'PARAMESWARY MAHESWARI', 'address' => 'ATHETON WESTHOLE KATABOOLA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Westhole'],

            // Hydri - 25 Records
            ['ref_no' => 'HH-2-1-57-01-145-01255', 'name' => 'SINNAMUTHU VASANTHAKUMARY', 'address' => 'HYDREE ESTATE ROZELLA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Hydri'],
            ['ref_no' => 'HH-2-1-57-01-145-01256', 'name' => 'VELU VIGNESWARY', 'address' => 'HIDRY ESTATE ROZELLA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Hydri'],
            ['ref_no' => 'HH-2-1-57-01-145-01257', 'name' => 'THANGKARASU VANITHA', 'address' => 'WIGTON LOWER DIVISION ROZELLA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Hydri'],
            ['ref_no' => 'HH-2-1-57-01-145-01258', 'name' => 'VENGADASALAM RANGASAMY', 'address' => 'WIGTON ESTATE ROZELLA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Hydri'],
            ['ref_no' => 'HH-2-1-57-01-145-01259', 'name' => 'DEVADAS JAYALALITHA', 'address' => 'WIGTON LOWER DIVISION ROZELLA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Hydri'],
            ['ref_no' => 'HH-2-1-57-01-145-01260', 'name' => 'RENGASAMY SIVAKUMARY', 'address' => 'HIDRY ESTATE ROZELLA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Hydri'],
            ['ref_no' => 'HH-2-1-57-01-145-01261', 'name' => 'MARIMUTHTHU SATHYASEELAN', 'address' => 'INCHARA DIVISION WIGTON ESTATE', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Hydri'],
            ['ref_no' => 'HH-2-1-57-01-145-01262', 'name' => 'RAJENDRAN DHARSHINI', 'address' => 'GLISTON GAMA HYDRIE ROZELLA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Hydri'],
            ['ref_no' => 'HH-2-1-57-01-145-01263', 'name' => 'MOORTHY NITHYAVANI', 'address' => 'HYDREE JANAPATHYA ROZELLA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Hydri'],
            ['ref_no' => 'HH-2-1-57-01-145-01264', 'name' => 'KARUPAIAH KAMALAWATHI', 'address' => 'HYDREE JANAPADAYA ROZELLA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Hydri'],
            ['ref_no' => 'HH-2-1-57-01-145-01265', 'name' => 'SELLAMMA GURUNADAN', 'address' => 'HYDREE JANAPADAYA ROZELLA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Hydri'],
            ['ref_no' => 'HH-2-1-57-01-145-01266', 'name' => 'RAMAKRISHNAN PARDEEP', 'address' => 'TEMPLESTOW ESTATE ROZELLA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Hydri'],
            ['ref_no' => 'HH-2-1-57-01-145-01267', 'name' => 'SHANMUGARAJ DINESH KUMAR', 'address' => 'HIDRY ESTATE ROZELLA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Hydri'],
            ['ref_no' => 'HH-2-1-57-01-145-01268', 'name' => 'MARIMUTHTHU LALIDAMBAL', 'address' => 'GLISTON GAMA HYDREE', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Hydri'],
            ['ref_no' => 'HH-2-1-57-01-145-01269', 'name' => 'SINDAMANI MOOKKAN', 'address' => 'HYDREE ESTATE ROZELLA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Hydri'],

            // Application Processing (5)
            ['ref_no' => 'HH-2-1-57-01-145-01270', 'name' => 'NADARAJA VENILKUMARAN', 'address' => 'TEMPLESTOW ESTATE HIDRY', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Hydri'],
            ['ref_no' => 'HH-2-1-57-01-145-01271', 'name' => 'RAJARATNAM GUNASEELAN', 'address' => 'HIDRY COLONY ROZELLA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Hydri'],
            ['ref_no' => 'HH-2-1-57-01-145-01272', 'name' => 'MARIMUTHTHU SAROJA', 'address' => 'HYDREE ESTATE ROSALLA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Hydri'],
            ['ref_no' => 'HH-2-1-57-01-145-01273', 'name' => 'KARUPAIAH KAMALAWATHI', 'address' => 'NO 4/1 A HYDREE JANAPADAYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Hydri'],
            ['ref_no' => 'HH-2-1-57-01-145-01274', 'name' => 'SELLAMMA GURUNADAN', 'address' => 'HYDREE JANAPADAYA ROZALLA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Hydri'],

            // Not Eligible (5)
            ['ref_no' => 'HH-2-1-57-01-145-01275', 'name' => 'RAJENDRAN DHARSHINI', 'address' => 'GLISTON GAMA HYDRIE ROZELLA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Hydri'],
            ['ref_no' => 'HH-2-1-57-01-145-01276', 'name' => 'MOORTHY NITHYAVANI', 'address' => 'HYDREE JANAPATHYA ROZELLA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Hydri'],
            ['ref_no' => 'HH-2-1-57-01-145-01277', 'name' => 'NADARAJA VENILKUMARAN', 'address' => 'TEMPLESTOW ESTATE HIDRY', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Hydri'],
            ['ref_no' => 'HH-2-1-57-01-145-01278', 'name' => 'RAMAKRISHNAN PARDEEP', 'address' => 'TEMPLESTOW ESTATE ROSELLA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Hydri'],
            ['ref_no' => 'HH-2-1-57-01-145-01279', 'name' => 'SHANMUGARAJ DINESH KUMAR', 'address' => 'HIDRY ESTATE ROZELLA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Hydri'],

            // KadiEllena - 25 Records
            ['ref_no' => 'HH-2-1-57-01-130-01280', 'name' => 'WE KUBURE GEDARA LASANTHI GAYATHRIKA SENARATH', 'address' => 'NO 26 MASKINAWATHTHA A JANAPADAYA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'KadiEllena'],
            ['ref_no' => 'HH-2-1-57-01-130-01281', 'name' => 'HABEEB MOHAMMED MMOHAMMED ALI JINNA', 'address' => '40 INGURUOYA SOUTH NAWALAPITIYA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'KadiEllena'],
            ['ref_no' => 'HH-2-1-57-01-130-01282', 'name' => 'KURUKULASOORIYALAGE PREMASIRI', 'address' => '20 INGURUOYA SOUTH GALABODA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'KadiEllena'],
            ['ref_no' => 'HH-2-1-57-01-130-01283', 'name' => 'GAMPALAGE RANJANI FONSEKA', 'address' => '53/A INGURUOYA SOUTH GALABADA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'KadiEllena'],
            ['ref_no' => 'HH-2-1-57-01-130-01284', 'name' => 'MURUGESHAN MALAR', 'address' => 'NO.46 NAWAGAMMANAYA INGURUOYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'KadiEllena'],
            ['ref_no' => 'HH-2-1-57-01-130-01285', 'name' => 'BOPAGOOA HETIGE SHAKILA HANSHAMALIKUMUDHUKUMAR', 'address' => 'NO 61 INGURUOYA GALAPODA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'KadiEllena'],
            ['ref_no' => 'HH-2-1-57-01-130-01286', 'name' => 'NAKATHDURA GRDARA JEEWANI CHANDIMA KUMARI', 'address' => 'NO 23 MASKINA WATHTHA A JANAPADAYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'KadiEllena'],
            ['ref_no' => 'HH-2-1-57-01-130-01287', 'name' => 'PALANIAMMA MARADAMUTHTHU', 'address' => 'NO 4 NAWA GAMMANAYA KADIELLENA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'KadiEllena'],
            ['ref_no' => 'HH-2-1-57-01-130-01288', 'name' => 'RASAIA SUNENDREN', 'address' => '34 නව ගම්මානය කඩිඑල්ලේන', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'KadiEllena'],
            ['ref_no' => 'HH-2-1-57-01-130-01289', 'name' => 'YOGALECHCHAMI', 'address' => '15 NAWAGAMMANAYA KADIELLENA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'KadiEllena'],
            ['ref_no' => 'HH-2-1-57-01-130-01290', 'name' => 'YAMILLE GEDARA ALIS', 'address' => '148 NAWAGAMMANAYA KADIELLENA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'KadiEllena'],
            ['ref_no' => 'HH-2-1-57-01-130-01291', 'name' => 'BHODHI PAKSHAGE IVON MANUSHIKA', 'address' => '226 නවගම්මානය කඩිඑල්ලේන', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'KadiEllena'],
            ['ref_no' => 'HH-2-1-57-01-130-01292', 'name' => 'KARUNAMUNI MALANI DE SILVA', 'address' => '66 කඩිඑල්ලේන නාවලපිටිය', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'KadiEllena'],
            ['ref_no' => 'HH-2-1-57-01-130-01293', 'name' => 'FATHIMA USNIYA', 'address' => 'NO 52/B KADIELLENA NAWALAPITIYA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'KadiEllena'],
            ['ref_no' => 'HH-2-1-57-01-130-01294', 'name' => 'SINNAIYA VALLIAMMA', 'address' => '24 නව ගම්මානය කඩිඑල්ලේන', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'KadiEllena'],

            // Application Processing (5)
            ['ref_no' => 'HH-2-1-57-01-130-01295', 'name' => 'HERATH BANDARALAGE PREMADASA', 'address' => 'NO 41 KADIELLENA NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'KadiEllena'],
            ['ref_no' => 'HH-2-1-57-01-130-01296', 'name' => 'JALAL MAHAMOORDEEN THAWUS', 'address' => '160 NAWAGAMMANAYA KADIELLENA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'KadiEllena'],
            ['ref_no' => 'HH-2-1-57-01-130-01297', 'name' => 'GANILA MUDALIGE MAGRAT', 'address' => '156 NAWAGAMMANAYA KADIELLENA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'KadiEllena'],
            ['ref_no' => 'HH-2-1-57-01-130-01298', 'name' => 'LATHEEF THUWAN SAHABDEEN', 'address' => '101 NAWAGAMMANAYA KADIELLENA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'KadiEllena'],
            ['ref_no' => 'HH-2-1-57-01-130-01299', 'name' => 'VELUNAGARATHNAM UDAYA SHANTHI', 'address' => '05 NEW COLONY KADIELLENA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'KadiEllena'],

            // Not Eligible (5)
            ['ref_no' => 'HH-2-1-57-01-130-01300', 'name' => 'AMBU ARACHCHILLAGE ROHAN PRADEEP BANDARA', 'address' => '225 නව ගම්මානය කඩිඑල්ලේන', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'KadiEllena'],
            ['ref_no' => 'HH-2-1-57-01-130-01301', 'name' => 'SELLAYYA KANDASAMY KASTHURI', 'address' => '130 නව ගම්මානය කඩිඑල්ලේන', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'KadiEllena'],
            ['ref_no' => 'HH-2-1-57-01-130-01302', 'name' => 'PATHIRANA MUDIYANSELAGE NUWAN CHAMARA', 'address' => '67 නවගම්මානය කඩිඑල්ලේන', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'KadiEllena'],
            ['ref_no' => 'HH-2-1-57-01-130-01303', 'name' => 'SUPPAIYA AMMASI', 'address' => 'KADIELLENA NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'KadiEllena'],
            ['ref_no' => 'HH-2-1-57-01-130-01304', 'name' => 'KARUNAMUNI MALANI DE SILVA', 'address' => '66 කඩිඑල්ලේන නාවලපිටිය', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'KadiEllena'],

            // Greenwood - 25 Records
            ['ref_no' => 'HH-2-1-57-01-135-01305', 'name' => 'SAMUEL RAJENDRAN', 'address' => 'GREENWOOD ESTATE NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Greenwood'],
            ['ref_no' => 'HH-2-1-57-01-135-01306', 'name' => 'MARY FERNANDO', 'address' => 'GREENWOOD DIVISION NAWALAPITIYA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Greenwood'],
            ['ref_no' => 'HH-2-1-57-01-135-01307', 'name' => 'JOHN PERERA', 'address' => 'NO 45 GREENWOOD ESTATE', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Greenwood'],
            ['ref_no' => 'HH-2-1-57-01-135-01308', 'name' => 'ANNA KUMARI', 'address' => 'GREENWOOD LOWER DIVISION', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Greenwood'],
            ['ref_no' => 'HH-2-1-57-01-135-01309', 'name' => 'DAVID SILVA', 'address' => 'GREENWOOD UPPER DIVISION NAWALAPITIYA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Greenwood'],
            ['ref_no' => 'HH-2-1-57-01-135-01310', 'name' => 'SUNITHA RANI', 'address' => 'NO 78 GREENWOOD ESTATE', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Greenwood'],
            ['ref_no' => 'HH-2-1-57-01-135-01311', 'name' => 'RAMESH KUMAR', 'address' => 'GREENWOOD COLONY NAWALAPITIYA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Greenwood'],
            ['ref_no' => 'HH-2-1-57-01-135-01312', 'name' => 'PRIYANKA DEVI', 'address' => 'MIDDLE DIVISION GREENWOOD', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Greenwood'],
            ['ref_no' => 'HH-2-1-57-01-135-01313', 'name' => 'KAMALESH WARAN', 'address' => 'GREENWOOD ESTATE NAWALAPITIYA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Greenwood'],
            ['ref_no' => 'HH-2-1-57-01-135-01314', 'name' => 'NIRMALA KUMARI', 'address' => 'NO 112 GREENWOOD', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Greenwood'],
            ['ref_no' => 'HH-2-1-57-01-135-01315', 'name' => 'SURESH BABU', 'address' => 'GREENWOOD LOWER DIVISION', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Greenwood'],
            ['ref_no' => 'HH-2-1-57-01-135-01316', 'name' => 'LALITHA DEVI', 'address' => 'GREENWOOD ESTATE', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Greenwood'],
            ['ref_no' => 'HH-2-1-57-01-135-01317', 'name' => 'VIJAYANATHAN', 'address' => 'NO 67 GREENWOOD COLONY', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Greenwood'],
            ['ref_no' => 'HH-2-1-57-01-135-01318', 'name' => 'CHANDRIKA PERERA', 'address' => 'MIDDLE DIVISION GREENWOOD', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Greenwood'],
            ['ref_no' => 'HH-2-1-57-01-135-01319', 'name' => 'MOHAN RAJ', 'address' => 'GREENWOOD UPPER DIVISION', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Greenwood'],

            // Application Processing (5)
            ['ref_no' => 'HH-2-1-57-01-135-01320', 'name' => 'KUMAR PERERA', 'address' => 'GREENWOOD ESTATE NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Greenwood'],
            ['ref_no' => 'HH-2-1-57-01-135-01321', 'name' => 'SAVITHRI DEVI', 'address' => 'GREENWOOD COLONY', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Greenwood'],
            ['ref_no' => 'HH-2-1-57-01-135-01322', 'name' => 'RANGANATHAN', 'address' => 'NO 89 GREENWOOD', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Greenwood'],
            ['ref_no' => 'HH-2-1-57-01-135-01323', 'name' => 'NADESH KUMARI', 'address' => 'LOWER DIVISION GREENWOOD', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Greenwood'],
            ['ref_no' => 'HH-2-1-57-01-135-01324', 'name' => 'BALASINGHAM', 'address' => 'GREENWOOD ESTATE', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Greenwood'],

            // Not Eligible (5)
            ['ref_no' => 'HH-2-1-57-01-135-01325', 'name' => 'FERNANDO MARY', 'address' => 'GREENWOOD NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Greenwood'],
            ['ref_no' => 'HH-2-1-57-01-135-01326', 'name' => 'SILVA JOHN', 'address' => 'NO 34 GREENWOOD ESTATE', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Greenwood'],
            ['ref_no' => 'HH-2-1-57-01-135-01327', 'name' => 'KUMARI ANNA', 'address' => 'UPPER DIVISION GREENWOOD', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Greenwood'],
            ['ref_no' => 'HH-2-1-57-01-135-01328', 'name' => 'RAJENDRAN DAVID', 'address' => 'GREENWOOD COLONY', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Greenwood'],
            ['ref_no' => 'HH-2-1-57-01-135-01329', 'name' => 'PERERA SUNITHA', 'address' => 'MIDDLE DIVISION GREENWOOD', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Greenwood'],

            // Nawalapitiya East - 25 Records
            ['ref_no' => 'HH-2-1-57-01-140-01330', 'name' => 'HERATH MUDIYANSELAGE RANJITH', 'address' => 'NO 12 NAWALAPITIYA EAST', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya East'],
            ['ref_no' => 'HH-2-1-57-01-140-01331', 'name' => 'KUMARI MENIKE', 'address' => 'EAST DIVISION NAWALAPITIYA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya East'],
            ['ref_no' => 'HH-2-1-57-01-140-01332', 'name' => 'BANDARA PREMADASA', 'address' => 'NO 67 NAWALAPITIYA EAST', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya East'],
            ['ref_no' => 'HH-2-1-57-01-140-01333', 'name' => 'RANJANI DEVIKA', 'address' => '45/A EAST COLONY NAWALAPITIYA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya East'],
            ['ref_no' => 'HH-2-1-57-01-140-01334', 'name' => 'SOMASIRI PERERA', 'address' => 'NO 89 NAWALAPITIYA EAST', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya East'],
            ['ref_no' => 'HH-2-1-57-01-140-01335', 'name' => 'NILUKA DILRUKSHI', 'address' => 'EAST DIVISION NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya East'],
            ['ref_no' => 'HH-2-1-57-01-140-01336', 'name' => 'CHANDRA KUMARI', 'address' => 'NO 112 EAST JANAPADAYA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya East'],
            ['ref_no' => 'HH-2-1-57-01-140-01337', 'name' => 'JAYASINGHE BANDARA', 'address' => '67 NAWALAPITIYA EAST', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya East'],
            ['ref_no' => 'HH-2-1-57-01-140-01338', 'name' => 'MANJULA PRIYANTHI', 'address' => 'EAST COLONY NAWALAPITIYA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya East'],
            ['ref_no' => 'HH-2-1-57-01-140-01339', 'name' => 'KUMARA BANDARA', 'address' => 'NO 78 EAST DIVISION', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya East'],
            ['ref_no' => 'HH-2-1-57-01-140-01340', 'name' => 'SUDARSHANI FERNANDO', 'address' => 'MIDDLE EAST NAWALAPITIYA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya East'],
            ['ref_no' => 'HH-2-1-57-01-140-01341', 'name' => 'NADEESHAN PERERA', 'address' => 'NO 56 NAWALAPITIYA EAST', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya East'],
            ['ref_no' => 'HH-2-1-57-01-140-01342', 'name' => 'LAKSHANI KUMARI', 'address' => 'EAST JANAPADAYA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya East'],
            ['ref_no' => 'HH-2-1-57-01-140-01343', 'name' => 'PRIYANTHA WIJESINGHE', 'address' => 'NO 91 EAST DIVISION', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya East'],
            ['ref_no' => 'HH-2-1-57-01-140-01344', 'name' => 'ANUSHA KUMARI', 'address' => 'GREENWOOD ROAD EAST NAWALAPITIYA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya East'],

            // Application Processing (5)
            ['ref_no' => 'HH-2-1-57-01-140-01345', 'name' => 'GAMINI BANDARA', 'address' => 'NO 23 NAWALAPITIYA EAST', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Nawalapitiya East'],
            ['ref_no' => 'HH-2-1-57-01-140-01346', 'name' => 'SOMA MENIKE', 'address' => 'EAST COLONY NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Nawalapitiya East'],
            ['ref_no' => 'HH-2-1-57-01-140-01347', 'name' => 'RUKMANI DEVI', 'address' => 'NO 45 EAST DIVISION', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Nawalapitiya East'],
            ['ref_no' => 'HH-2-1-57-01-140-01348', 'name' => 'JAYAWARDENA', 'address' => 'MIDDLE EAST NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Nawalapitiya East'],
            ['ref_no' => 'HH-2-1-57-01-140-01349', 'name' => 'NILMINI KUMARI', 'address' => 'NO 78 NAWALAPITIYA EAST', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Nawalapitiya East'],

            // Not Eligible (5)
            ['ref_no' => 'HH-2-1-57-01-140-01350', 'name' => 'PERERA SUNIL', 'address' => 'EAST DIVISION NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Nawalapitiya East'],
            ['ref_no' => 'HH-2-1-57-01-140-01351', 'name' => 'KUMARI LALITHA', 'address' => 'NO 34 EAST COLONY', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Nawalapitiya East'],
            ['ref_no' => 'HH-2-1-57-01-140-01352', 'name' => 'BANDARA GAMINI', 'address' => 'UPPER EAST NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Nawalapitiya East'],
            ['ref_no' => 'HH-2-1-57-01-140-01353', 'name' => 'MENIKE CHANDRA', 'address' => 'NO 67 NAWALAPITIYA EAST', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Nawalapitiya East'],
            ['ref_no' => 'HH-2-1-57-01-140-01354', 'name' => 'RANJITH SILVA', 'address' => 'EAST JANAPADAYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Nawalapitiya East'],

            // Bawwagama - 25 Records
            ['ref_no' => 'HH-2-1-57-01-085-01355', 'name' => 'MOHANRAMESH', 'address' => 'IMBULUPITIYA JANAPATAYA BAWWAGAMA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Bawwagama'],
            ['ref_no' => 'HH-2-1-57-01-085-01356', 'name' => 'DHARMARAJ DHARSHINI', 'address' => '198 දෙකිඳ පාර BAWWAGAMA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Bawwagama'],
            ['ref_no' => 'HH-2-1-57-01-085-01357', 'name' => 'RAMASAMY PRABAWATHY', 'address' => '52 IBULPITIYA JANAPADAYA BAWWAGAMA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Bawwagama'],
            ['ref_no' => 'HH-2-1-57-01-085-01358', 'name' => 'MAHAMUD UMMU JEKIYA', 'address' => '13/29/A සේලම්බ්‍රිජ් BAWWAGAMA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Bawwagama'],
            ['ref_no' => 'HH-2-1-57-01-085-01359', 'name' => 'SUNDARASAN JAGADAMPAL', 'address' => '28/102 සේලම්බ්‍රිජ් BAWWAGAMA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Bawwagama'],
            ['ref_no' => 'HH-2-1-57-01-085-01360', 'name' => 'KAIRUN NISA ABDUL WAHID', 'address' => '34/5 SELAMBRIDGE BAWWAGAMA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Bawwagama'],
            ['ref_no' => 'HH-2-1-57-01-085-01361', 'name' => 'PALITHA MAHAGAMAGE', 'address' => '7/6 බව්වාගම නාවලපිටිය', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Bawwagama'],
            ['ref_no' => 'HH-2-1-57-01-085-01362', 'name' => 'GURUNATHAN BALAKRISHNAN', 'address' => '59/4 HDI BAWWAGAMA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Bawwagama'],
            ['ref_no' => 'HH-2-1-57-01-085-01363', 'name' => 'DIYANWALA MADDEGEDARA RANJANI DEVIKA', 'address' => 'NO.848/22 IMBULPITIYA COLONY BAWWAGAMA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Bawwagama'],
            ['ref_no' => 'HH-2-1-57-01-085-01364', 'name' => 'P REGINA', 'address' => 'NO-5/B DEKINDA ROAD BAWWAGAMA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Bawwagama'],
            ['ref_no' => 'HH-2-1-57-01-085-01365', 'name' => 'RAMAKRISHNA RAJAGOPAL', 'address' => '141/2 BAWWAGAMA NAWALAPITIYA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Bawwagama'],
            ['ref_no' => 'HH-2-1-57-01-085-01366', 'name' => 'RAJAGOPAL MANOJPRADAB', 'address' => '141/2 BAWWAGAMA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Bawwagama'],
            ['ref_no' => 'HH-2-1-57-01-085-01367', 'name' => 'S LOORDHA MERY', 'address' => 'IMBOOLPITIYA UPPER DIVISION BAWWAGAMA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Bawwagama'],
            ['ref_no' => 'HH-2-1-57-01-085-01368', 'name' => 'RAJAPAKSHA ARACHCHILAGE IWLIN NONA', 'address' => '848/20 IMBOOLPITIYA COLONY', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Bawwagama'],
            ['ref_no' => 'HH-2-1-57-01-085-01369', 'name' => 'NONA EJA SHERIEF', 'address' => 'NO 02 BAWWAGAMA COLONY', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Bawwagama'],

            // Application Processing (5)
            ['ref_no' => 'HH-2-1-57-01-085-01370', 'name' => 'WANNAKUWATHTHA WADUGE THILAKA FERNANDO', 'address' => 'BAWWAGAMA NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Bawwagama'],
            ['ref_no' => 'HH-2-1-57-01-085-01371', 'name' => 'SALAWA POLWATHTHE GEDARA PODIMANIKE', 'address' => '65 IDH BAWWAGAMA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Bawwagama'],
            ['ref_no' => 'HH-2-1-57-01-085-01372', 'name' => 'ATIGALAGE DONA CHARLOTTE', 'address' => 'NO3/5 NEW HOUSE SCHEME BAWWAGAMA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Bawwagama'],
            ['ref_no' => 'HH-2-1-57-01-085-01373', 'name' => 'KAIRUN NISA ABDUL WAHID', 'address' => '34/5 SELAMBRIDGE BAWWAGAMA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Bawwagama'],
            ['ref_no' => 'HH-2-1-57-01-085-01374', 'name' => 'PALITHA MAHAGAMAGE', 'address' => '7/6 BAWWAGAMA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Bawwagama'],

            // Not Eligible (5)
            ['ref_no' => 'HH-2-1-57-01-085-01375', 'name' => 'GURUNATHAN BALAKRISHNAN', 'address' => '59/4 HDI BAWWAGAMA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Bawwagama'],
            ['ref_no' => 'HH-2-1-57-01-085-01376', 'name' => 'DIYANWALA MADDEGEDARA RANJANI DEVIKA', 'address' => 'NO.848/22 BAWWAGAMA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Bawwagama'],
            ['ref_no' => 'HH-2-1-57-01-085-01377', 'name' => 'P REGINA', 'address' => 'NO-5/B DEKINDA ROAD BAWWAGAMA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Bawwagama'],
            ['ref_no' => 'HH-2-1-57-01-085-01378', 'name' => 'RAMAKRISHNA RAJAGOPAL', 'address' => '141/2 BAWWAGAMA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Bawwagama'],
            ['ref_no' => 'HH-2-1-57-01-085-01379', 'name' => 'RAJAGOPAL MANOJPRADAB', 'address' => '141/2 BAWWAGAMA NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Bawwagama'],

            // Imbulpitiya - 25 Records
            ['ref_no' => 'HH-2-1-57-01-075-00807', 'name' => 'YOGANADAN SASIDA', 'address' => 'ගල්ඔය කොටස ඉඹුල්පිටිය නාවලපිටිය', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Imbulpitiya'],
            ['ref_no' => 'HH-2-1-57-01-075-00808', 'name' => 'RAMAIAH SIVALINGAM', 'address' => 'නො.15 ග්‍රීන්ගොල්ඩ් නිවාස සංකීර්ණය ගල්ඹය කොටස', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Imbulpitiya'],
            ['ref_no' => 'HH-2-1-57-01-075-00809', 'name' => 'KITNASAMY KALIAMMAI', 'address' => 'ගල්ඔය කොටස ඉඹුල්පිටිය වත්ත', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Imbulpitiya'],
            ['ref_no' => 'HH-2-1-57-01-075-00811', 'name' => 'SUPPAIYAH SATHYAPRIYA', 'address' => 'NO-847/6/50, MAHINANANTHAGAMA, IMBOOLPITIYA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Imbulpitiya'],
            ['ref_no' => 'HH-2-1-57-01-075-00812', 'name' => 'MANIKKAM CHANDREN', 'address' => 'ගල්ඔය කොටස ඉඹුල්පිටිය වත්ත', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Imbulpitiya'],
            ['ref_no' => 'HH-2-1-57-01-075-00817', 'name' => 'SELLADURAI KAMALESHWARY', 'address' => 'NO 52, MEDAGAHA WATHURA, IMBULPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Imbulpitiya'],
            ['ref_no' => 'HH-2-1-57-01-075-00818', 'name' => 'VELLE AMMA SIVASAMI', 'address' => 'IMBULPITIYA LOWER DIVISION', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Imbulpitiya'],
            ['ref_no' => 'HH-2-1-57-01-075-00819', 'name' => 'KARUPAIAH SELVAM', 'address' => 'IMBULPITIYA LOWER DIVISION', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Imbulpitiya'],
            ['ref_no' => 'HH-2-1-57-01-075-00820', 'name' => 'MURUGAN JAYALECHCHAMI', 'address' => 'GALOYA DIVISION IMBULPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Imbulpitiya'],
            ['ref_no' => 'HH-2-1-57-01-075-00821', 'name' => 'SINNATHAMBI NAGU', 'address' => 'IMBULPITIYA LOWER DIVISION', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Imbulpitiya'],
            ['ref_no' => 'HH-2-1-57-01-075-00822', 'name' => 'EBRAHAM JEMISS', 'address' => 'IMBULPITIYA ESTATE', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Imbulpitiya'],
            ['ref_no' => 'HH-2-1-57-01-075-00823', 'name' => 'SINNASAMI DOREISAMI', 'address' => 'IMBULPITIYA LOWER DIVISION', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Imbulpitiya'],
            ['ref_no' => 'HH-2-1-57-01-075-00824', 'name' => 'PERUMAL POORNAM', 'address' => '45/7 IMBULPITIYA GALOYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Imbulpitiya'],
            ['ref_no' => 'HH-2-1-57-01-075-00825', 'name' => 'RAMASAMI ALAGON', 'address' => 'IMBULPITIYA UPPER DIVISION', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Imbulpitiya'],
            ['ref_no' => 'HH-2-1-57-01-075-00826', 'name' => 'SIRIL CHANDRIKA', 'address' => '2013/19 IMBOOLPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Imbulpitiya'],

            // Application Processing (5)
            ['ref_no' => 'HH-2-1-57-01-075-00992', 'name' => 'VELLE AMMA SIVASAMI', 'address' => 'IMBULPITIYA LOWER DIVISION NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Imbulpitiya'],
            ['ref_no' => 'HH-2-1-57-01-075-00993', 'name' => 'SAMARAWICKRAMA FRANSIS', 'address' => 'NO 36 MADAGAHAWATHURA NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Imbulpitiya'],
            ['ref_no' => 'HH-2-1-57-01-075-00994', 'name' => 'KARUPAIAH SELVAM', 'address' => 'IMBULPITIYA LOWER DIVISION NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Imbulpitiya'],
            ['ref_no' => 'HH-2-1-57-01-075-00995', 'name' => 'SINNATHAMBI NAGU', 'address' => 'IMBULPITIYA LOWER DIVISION NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Imbulpitiya'],
            ['ref_no' => 'HH-2-1-57-01-075-00996', 'name' => 'MURUGAN JAYALECHCHAMI', 'address' => 'GALOYA DIVISION IMBULPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Imbulpitiya'],

            // Not Eligible (5)
            ['ref_no' => 'HH-2-1-57-01-075-00841', 'name' => 'FERNANDO JEBAMALAI MERY', 'address' => 'D/14 IMBULPITIYA LDA NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Imbulpitiya'],
            ['ref_no' => 'HH-2-1-57-01-075-00806', 'name' => 'GANESHAN DILSHANTHI', 'address' => '193 කොත්මලේ පාර බව්වාගම නාවලපිටිය', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Imbulpitiya'],
            ['ref_no' => 'HH-2-1-57-01-075-00810', 'name' => 'KARUPPAIYAH JANAKI', 'address' => 'GALLOYA DIVISION , IMBOOLPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Imbulpitiya'],
            ['ref_no' => 'HH-2-1-57-01-075-00814', 'name' => 'PONNAMBALAM SUPPAIYAH', 'address' => 'NO, 60, MAHINDAGAMA, IMBOOLPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Imbulpitiya'],
            ['ref_no' => 'HH-2-1-57-01-075-00815', 'name' => 'MAVI KUBURE GEDARA NIMALI', 'address' => 'IMBOOLPITIYA LOWER DIVISIONN -NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Imbulpitiya'],

            // Nawalapitiya South - 25 Records
            ['ref_no' => 'HH-2-1-57-02-055-00548', 'name' => 'THUWAAN MOHAMAD SARDHARI ROSHAN', 'address' => 'NO -160/92, HADHUNGALAWATTA, NAWALAPITIYA.', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya South'],
            ['ref_no' => 'HH-2-1-57-01-085-01331', 'name' => 'GOOPAL SASIKALA', 'address' => 'IMBULPITIYA LOW DIVITION NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya South'],
            ['ref_no' => 'HH-2-1-57-02-055-00550', 'name' => 'WIJERATHNA GAMAGE KAUSHALYA PRIYADARSHANI', 'address' => '160/103 HANDUNGALAWATTA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya South'],
            ['ref_no' => 'HH-2-1-57-02-055-00551', 'name' => 'KRISTHOMBU BADUGE CHANDRALATHA', 'address' => '27 DOLOSBAGE PASU MAWATHA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya South'],
            ['ref_no' => 'HH-2-1-57-02-055-00552', 'name' => 'DORAKUMBURE GEDARA ARIYAWATHEE', 'address' => '160/96 HADUNGALA ESTATE ROAD', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya South'],
            ['ref_no' => 'HH-2-1-57-02-055-00553', 'name' => 'RAMALINGAM SUPPAIYA SUBRAMANIYAM', 'address' => '160/47 HADUNGALA WATHTHA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya South'],
            ['ref_no' => 'HH-2-1-57-02-055-00554', 'name' => 'SINGAN KUTTTI ARACHCHIGE ADVIN SENEVIRATHNE', 'address' => '34/3 WEEKANDA PATHANA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya South'],
            ['ref_no' => 'HH-2-1-57-02-055-00555', 'name' => 'HADAPANGODA MUDALIGE UPASENA JAYAWARDHANA', 'address' => '218/13 DOLOSBAGE ROAD', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya South'],
            ['ref_no' => 'HH-2-1-57-02-055-00556', 'name' => 'MANIKKA WALLI MURUGAIYA', 'address' => '19/2 HILL ROAD', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya South'],
            ['ref_no' => 'HH-2-1-57-02-055-00557', 'name' => 'PATREESHIYA IMAKWEL ABHEDEERA', 'address' => '16/1/C HADUNGALA WATHTHA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya South'],
            ['ref_no' => 'HH-2-1-57-02-055-00558', 'name' => 'NOORJAN BIBI SEGU DAUDU', 'address' => '39 HILL ROAD', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya South'],
            ['ref_no' => 'HH-2-1-57-02-055-00559', 'name' => 'JANAKI RAJA', 'address' => '118/4 PANIGODAMULLA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya South'],
            ['ref_no' => 'HH-2-1-57-02-055-00560', 'name' => 'AZIZ MOHOMED RASHEED', 'address' => 'NO 11/12 UPPER HILL ROAD', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya South'],
            ['ref_no' => 'HH-2-1-57-02-055-00561', 'name' => 'SHANMUGANADAN VIGNESHWARAN', 'address' => '106/7 AMBAGAMUWA RD', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya South'],
            ['ref_no' => 'HH-2-1-57-02-055-00562', 'name' => 'MANIKKU RATHNAWEERAGE CHANDRIKA', 'address' => '1/4 KAVEESHWARA MAWATHA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya South'],

            // Application Processing (5)
            ['ref_no' => 'HH-2-1-57-02-055-00563', 'name' => 'WIJERATHNA GAMAGE KAUSHALYA PRIYADARSHANI', 'address' => '160/103, HANDUNGALAWATTA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Nawalapitiya South'],
            ['ref_no' => 'HH-2-1-57-02-055-00663', 'name' => 'KRISTHOMBU BADUGE CHANDRALATHA', 'address' => '27 DOLOSBAGE PASU MAWATHA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Nawalapitiya South'],
            ['ref_no' => 'HH-2-1-57-02-055-00664', 'name' => 'NOOR LEBBE AMIRDEN SITHTHI ANISHA UMM', 'address' => 'NO 40 HANDUNGALA WATHTHA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Nawalapitiya South'],
            ['ref_no' => 'HH-2-1-57-02-055-00665', 'name' => 'DORAKUMBURE GEDARA ARIYAWATHEE', 'address' => '160/96 HADUNGALA ESTATE ROAD', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Nawalapitiya South'],
            ['ref_no' => 'HH-2-1-57-02-055-00666', 'name' => 'RAMALINGAM SUPPAIYA SUBRAMANIYAM', 'address' => '160/47 HADUNGALA WATHTHA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Nawalapitiya South'],

            // Not Eligible (5) — FIXED: last row's ref_no changed from duplicate '...00563' to '...00564'
            ['ref_no' => 'HH-2-1-57-02-055-00547', 'name' => 'DORAISAMY MARGRET', 'address' => '123, DOLOSBAGE ROAD NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Nawalapitiya South'],
            ['ref_no' => 'HH-2-1-57-02-055-00549', 'name' => 'MURUGAIHA SATHASIVAM', 'address' => '148/ 1A, DOLOESBAGE ROAD', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Nawalapitiya South'],
            ['ref_no' => 'HH-2-1-57-02-055-00564', 'name' => 'ANNAMALEI SAUNDARANI', 'address' => 'ADUNKOLAWATTA NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Nawalapitiya South'],
            ['ref_no' => 'HH-2-1-57-01-145-00929', 'name' => 'SUPPAIAH RAJESWARY', 'address' => '154A, AMBAGAMUWA ROAD', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Nawalapitiya South'],
            ['ref_no' => 'HH-2-1-57-02-055-00633', 'name' => 'KUMARA CHANDRASIRI WEEWRASEKARA', 'address' => '118/37 PANIGODAMULLA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Nawalapitiya South'],

            // Nawalapitiya West - 25 Records — FIXED: 15 ref_nos renumbered (00450-00464)
            // because they were identical to already-seeded Nawalapitiya North rows.
            ['ref_no' => 'HH-2-1-57-01-060-00450', 'name' => 'WALGAMAGE IROSHANI', 'address' => '123/5 AMBAGAMUWA ROAD NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya West'],
            ['ref_no' => 'HH-2-1-57-01-060-00451', 'name' => 'MOHAMED ZAKARIA FATHIMA SHAHMIDA', 'address' => '106/4.B PANITHUDUMULLA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya West'],
            ['ref_no' => 'HH-2-1-57-01-060-00452', 'name' => 'KADAR BACHARACH JAMEELA', 'address' => '179/115 JETHAWANA MAWATHA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya West'],
            ['ref_no' => 'HH-2-1-57-01-060-00453', 'name' => 'NALEEM FATHIMA AZMINA', 'address' => '23 PANITHUDUMULL NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya West'],
            ['ref_no' => 'HH-2-1-57-01-060-00454', 'name' => 'MANOHARAN KARUPPAIYA', 'address' => 'NO.10 JAYASUNDARA LANE', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya West'],
            ['ref_no' => 'HH-2-1-57-01-060-00340', 'name' => 'FATHIMA SULFIKA', 'address' => '80/2/1/A KARAHANDUNGALA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya West'],
            ['ref_no' => 'HH-2-1-57-01-060-00341', 'name' => 'ABDHUL HAMEED MOHOMMED MARUF', 'address' => '11/5/B JAYASUNDARA ROAD', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya West'],
            ['ref_no' => 'HH-2-1-57-01-060-00342', 'name' => 'MADDUMA HETTIARACHCHIGE SUBADRIKA NERANJANEE', 'address' => '179/18 JETHAWANA MAWATHA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya West'],
            ['ref_no' => 'HH-2-1-57-01-060-00343', 'name' => 'SAHUL HAMEED SITHY SAFEENA', 'address' => '140/22 KARAHADUNGALA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya West'],
            ['ref_no' => 'HH-2-1-57-01-060-00344', 'name' => 'MOHAMED ZUBAIR MOHAMED SAFEE', 'address' => '21/1 JAYASUNDARA LANE', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya West'],
            ['ref_no' => 'HH-2-1-57-01-060-00345', 'name' => 'SAHARDEEN SULFIKA', 'address' => '25 තුන්වෙනි පටුමග', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya West'],
            ['ref_no' => 'HH-2-1-57-01-060-00346', 'name' => 'MOHAMED NAWAS FATHIMA RIFKA', 'address' => '15/1/1 PANITHUDUMULLA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya West'],
            ['ref_no' => 'HH-2-1-57-01-060-00347', 'name' => 'KARUPPIAH KRISHNAKUMAR', 'address' => '219 AMBAGAMUWA ROAD', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya West'],
            ['ref_no' => 'HH-2-1-57-01-060-00348', 'name' => 'MOHAMED ABDHULLAH MOHAMED MUAADH', 'address' => '28/2E KARAHANDUNGALA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya West'],
            ['ref_no' => 'HH-2-1-57-01-060-00349', 'name' => 'NUGAWALAGEDARA JALEEL NONA RINOSA', 'address' => '23/1 JAYASUNDARA LANE', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya West'],

            // Application Processing (5)
            ['ref_no' => 'HH-2-1-57-01-060-00455', 'name' => 'FATHIMA SULFIKA', 'address' => '80/2/1/A KARAHANDUNGALA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Nawalapitiya West'],
            ['ref_no' => 'HH-2-1-57-01-060-00456', 'name' => 'ABDHUL HAMEED MOHOMMED MARUF', 'address' => '11/5/B JAYASUNDARA ROAD', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Nawalapitiya West'],
            ['ref_no' => 'HH-2-1-57-01-060-00457', 'name' => 'MADDUMA HETTIARACHCHIGE SUBADRIKA NERANJANEE', 'address' => '179/18 JETHAWANA MAWATHA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Nawalapitiya West'],
            ['ref_no' => 'HH-2-1-57-01-060-00458', 'name' => 'SAHUL HAMEED SITHY SAFEENA', 'address' => '140/22 KARAHADUNGALA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Nawalapitiya West'],
            ['ref_no' => 'HH-2-1-57-01-060-00459', 'name' => 'JUNAIDEEN MOHAMED NAJEEM', 'address' => '62 PANITHUDUMULLA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Nawalapitiya West'],

            // Not Eligible (5)
            ['ref_no' => 'HH-2-1-57-01-060-00460', 'name' => 'MOHAMED ZUBAIR MOHAMED SAFEE', 'address' => '21/1 JAYASUNDARA LANE', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Nawalapitiya West'],
            ['ref_no' => 'HH-2-1-57-01-060-00461', 'name' => 'MOHOMED SUBAIR MOHOMED FAREIH', 'address' => 'නො. 21/1 ජයසුන්දර මාවත', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Nawalapitiya West'],
            ['ref_no' => 'HH-2-1-57-01-060-00462', 'name' => 'SAHARDEEN SULFIKA', 'address' => 'නො.25 තුන්වෙනි පටුමග', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Nawalapitiya West'],
            ['ref_no' => 'HH-2-1-57-01-060-00463', 'name' => 'MOHAMED NAWAS FATHIMA RIFKA', 'address' => '15/1/1 PANITHUDUMULLA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Nawalapitiya West'],
            ['ref_no' => 'HH-2-1-57-01-060-00464', 'name' => 'MAHIR', 'address' => '86 PENITHUDUMULLA NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Nawalapitiya West'],



            ['ref_no' => 'HH-2-1-57-02-110-00263', 'name' => 'FATHIMA SULFIKA', 'address' => '80/2/1/A KARAHANDUNGALA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Nawalapitiya North'],
            ['ref_no' => 'HH-2-1-57-01-060-00409', 'name' => 'ABDHUL HAMEED MOHOMMED MARUF', 'address' => '11/5/B JAYASUNDARA ROAD', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Nawalapitiya North'],
            ['ref_no' => 'HH-2-1-57-01-060-00411', 'name' => 'MADDUMA HETTIARACHCHIGE SUBADRIKA NERANJANEE', 'address' => '179/18 JETHAWANA MAWATHA AMBAGAMUWA ROAD', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Nawalapitiya North'],
            ['ref_no' => 'HH-2-1-57-01-060-00412', 'name' => 'SAHUL HAMEED SITHY SAFEENA', 'address' => 'NO140/22, KARAHADUNGALA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Nawalapitiya North'],
            ['ref_no' => 'HH-2-1-57-01-060-00334', 'name' => 'JUNAIDEEN MOHAMED NAJEEM', 'address' => '62 PANITHUDUMULLA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Nawalapitiya North'],
            ['ref_no' => 'HH-2-1-57-01-060-00316', 'name' => 'MOHAMED ZUBAIR MOHAMED SAFEE', 'address' => '21/1 JAYASUNDARA LANE', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Nawalapitiya North'],
            ['ref_no' => 'HH-2-1-57-01-060-00317', 'name' => 'WALGAMAGE IROSHANI', 'address' => '123/5 AMBAGAMUWA ROAD', 'category' => 'Eligible', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya North'],
            ['ref_no' => 'HH-2-1-57-01-060-00318', 'name' => 'MOHAMED ZAKARIA FATHIMA SHAHMIDA', 'address' => '106/4.B PANITHUDUMULLA', 'category' => 'Eligible', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya North'],
            ['ref_no' => 'HH-2-1-57-01-060-00319', 'name' => 'MOHOMED SUBAIR MOHOMED FAREIH', 'address' => 'NO. 21/1 JAYASUNDARA MAWATHA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Nawalapitiya North'],
            ['ref_no' => 'HH-2-1-57-01-060-00320', 'name' => 'SAHARDEEN SULFIKA', 'address' => 'NO.25 THIRD LANE PANITHUDUMULLA ROAD', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Nawalapitiya North'],
            ['ref_no' => 'HH-2-1-57-01-060-00321', 'name' => 'MOHAMED NAWAS FATHIMA RIFKA', 'address' => '15/1/1 PANITHUDUMULLA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Nawalapitiya North'],
            ['ref_no' => 'HH-2-1-57-01-060-00322', 'name' => 'MAHIR', 'address' => '86 PENITHUDUMULLA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Nawalapitiya North'],
            ['ref_no' => 'HH-2-1-57-01-060-00323', 'name' => 'KARUPPIAH KRISHNAKUMAR', 'address' => 'NO.219, AMBAGAMUWA ROAD', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Nawalapitiya North'],
            ['ref_no' => 'HH-2-1-57-01-060-00324', 'name' => 'KADAR BACHARACH JAMEELA', 'address' => '179/115 JETHAWANA MAWATHA', 'category' => 'Eligible', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya North'],
            ['ref_no' => 'HH-2-1-57-01-060-00325', 'name' => 'MOHAMED ABDHULLAH MOHAMED MUAADH', 'address' => '28/2E KARAHANDUNGALA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Nawalapitiya North'],
            ['ref_no' => 'HH-2-1-57-01-060-00326', 'name' => 'VELAYUDAM THANGESHWARY', 'address' => '-', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Nawalapitiya North'],
            ['ref_no' => 'HH-2-1-57-01-060-00328', 'name' => 'MADASAMY SELVI', 'address' => 'NO - 140/15, KARAHANTHUNGALA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Nawalapitiya North'],
            ['ref_no' => 'HH-2-1-57-01-060-00329', 'name' => 'NUGAWALAGEDARA JALEEL NONA RINOSA', 'address' => '23/1 JAYASUNDARA LANE', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Nawalapitiya North'],
            ['ref_no' => 'HH-2-1-57-01-060-00330', 'name' => 'RAJAPAKSHA MUDIYANSELAGE CHANDRIKA PUSHPAKUMARI', 'address' => 'NO.179/122, JETHAWANA MAWATHA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Nawalapitiya North'],
            ['ref_no' => 'HH-2-1-57-01-060-00331', 'name' => 'MOHAMED JABIR MOHAMED AZMY', 'address' => '36/4 ,PENIDUDUMULLA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Nawalapitiya North'],
            ['ref_no' => 'HH-2-1-57-01-060-00333', 'name' => 'BADURDEEN MOHAMED HANIFFA', 'address' => '133/35, GODAMUDUNA LANE NO 5', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Nawalapitiya North'],
            ['ref_no' => 'HH-2-1-57-01-060-00335', 'name' => 'NALEEM FATHIMA AZMINA', 'address' => '23 PANITHUDUMULL', 'category' => 'Eligible', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya North'],
            ['ref_no' => 'HH-2-1-57-01-060-00336', 'name' => 'PUVANESWARY KATHIRESAN', 'address' => '36/8 PANITHUDUMULLA ROAD', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Nawalapitiya North'],
            ['ref_no' => 'HH-2-1-57-01-060-00337', 'name' => 'MOHAMED NASAR FATHIMA SHAKEENATH', 'address' => '78/2 PANITHUDUMULLA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Nawalapitiya North'],
            ['ref_no' => 'HH-2-1-57-01-060-00338', 'name' => 'MANOHARAN KARUPPAIYA', 'address' => 'NO.10. JAYASUNDARA LANE', 'category' => 'Eligible', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Nawalapitiya North'],



            ['ref_no' => 'HH-2-1-57-02-035-00271', 'name' => 'PANDARAM GANESHAN', 'address' => 'GALAMUDUNA ESTATE DOLOSBAGE', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Uda Rabukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-035-00281', 'name' => 'ALAKU RASAYYA', 'address' => 'GALAMUDUNA ESTATE,DOLOSBAGE', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Uda Rabukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-035-00284', 'name' => 'KARUPAYA SIVAKUMAR', 'address' => 'GALAMUDUNA ESTATE,DOLOSBAGE', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Uda Rabukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-035-00292', 'name' => 'IYYANKUTTI RAMAR', 'address' => 'NC UPPER DIVISION GALAMUDUNA ESTATE DOLOSBAGE', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Uda Rabukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-035-00328', 'name' => 'PONNAIYA KAKAIVANI', 'address' => 'GALAMUDUNA ESTATE DOLOSBAGE', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Uda Rabukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-035-00339', 'name' => 'MUTHTHAIAH RAJESHWARY', 'address' => 'GALAMUDUNA EASTATE DOLOSBAGE DOLOSBAGE', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Uda Rabukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-035-00343', 'name' => 'MURUPAN GEDARA SUGATHAPALA', 'address' => 'GALAMUDUNA WATHTA DOLOSBAGE DOLOSBAGE', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Uda Rabukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-035-00398', 'name' => 'MUNIYANDI GANESHAN', 'address' => 'GALAMUDUNA WATTA DOLOSBAGE', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Uda Rabukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-035-00416', 'name' => 'LOKUPITIYE PISELI PERERA', 'address' => '05 UDAWALAWWATTHA RAMBUKPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Uda Rabukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-035-00417', 'name' => 'SUBASINGHE ARACHCHILAGE NANDAWATHI', 'address' => '119 UDA RAMBUKPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Uda Rabukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-035-00418', 'name' => 'PICHCHEI WAIYAPOORI', 'address' => 'GALAMUDUNA ESTATE DOLOSBAGE', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Uda Rabukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-035-00419', 'name' => 'RAMAIYA MARIYAI', 'address' => 'GALAMUDUNA WATHTHA DOLOSBAGE', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Uda Rabukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-035-00420', 'name' => 'KARASINGHE MUDIYANSELAGE JAYAWEERA', 'address' => 'UDA WALAWWATHTHA RAMBUKPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Uda Rabukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-035-00421', 'name' => 'PERIYASAMI MEENACHCHI', 'address' => 'HARANDAL B RAMBUKPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Uda Rabukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-035-00422', 'name' => 'KARUPAIYA DANALASHMI', 'address' => 'GALAMUDUNA ESTATE ,DOLOSBAGE', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Uda Rabukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-035-00423', 'name' => 'HALLAWA GEDARA ROOPALATHA MANIKE', 'address' => 'NC DIVISION GALAMUDUNA ESTATE DOLOSBAGE', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Uda Rabukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-035-00294', 'name' => 'GANESHAN SELVAKUMARI', 'address' => 'NC UPPER DIVISION GALAMUDUNA ESTATE DOLOSBAGE', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Uda Rabukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-035-00342', 'name' => 'KANDASAMI MARIYAMMA', 'address' => 'GALAMUDUNA WATHTA DOLOSBAGE DOLOSBAGE', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Uda Rabukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-035-00411', 'name' => 'SANGILI DAMODARAN', 'address' => 'GALAMUDHUNA WATTA DOLOSBAGE', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Uda Rabukpitiya'],
            ['ref_no' => 'HH-2-1-57-01-010-00317', 'name' => 'ARUMUGAM PUSPHARANI', 'address' => 'GALAMUDUNA ESTATE DOLOSBAGE', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Uda Rabukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-035-00262', 'name' => 'MUTTHUKUMAR KESHAVAN', 'address' => 'GALAMUDUNA ESTATE, DOLOSBAGE', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Uda Rabukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-035-00263', 'name' => 'WIJAYARATHNAM KALEIMADI', 'address' => 'GALAMUDUNA ESTATE, DOLOSBAGE', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Uda Rabukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-035-00264', 'name' => 'PANDARAM VIVEGANATAN', 'address' => 'GALAMUDUNA ESTATE DOLOSBAGE', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Uda Rabukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-035-00265', 'name' => 'SIVANOO ASOKUMAR', 'address' => 'NC UPPER DIVISION GALAMUDUNA ESTATE DOLOSBAGE', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Uda Rabukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-035-00266', 'name' => 'MADAVAN SELVAKUMAR', 'address' => 'GALAMUDUNA ESTATE DOLOSBAGE', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Uda Rabukpitiya'],


            // Pahala Rambukpitiya - 25 Records
            ['ref_no' => 'HH-2-1-57-02-030-00267', 'name' => 'WEERAKOON MUDIYANSELAGE WIMALAWATHI', 'address' => '46, THREDEN BOYS COLONY RAMBUKPITIYA KABARAGALA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Pahala Rambukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-030-00266', 'name' => 'KONGAHA GEDARA YASODARA MIHIRI DELIYA DARMARATHNA', 'address' => '32 THEDANBOYS KALUGALHINNA GONAWALAPATHANA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Pahala Rambukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-030-00271', 'name' => 'NANAYAKKARA LOKU KUTTILAGE SWARNATHILAKA', 'address' => '94/1 DELGAHAELLA RAMBUKPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Pahala Rambukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-030-00272', 'name' => 'SELLASAMI SATHYAMOORTHI', 'address' => '64 MEEPITIYA NAWALAPITIYA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Pahala Rambukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-030-00273', 'name' => 'HERATH MUDIYANSELAGE SOMAWATHI', 'address' => 'HERATH NIWASA PAHALA RAMBUKPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Pahala Rambukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-030-00274', 'name' => 'KANAWIL DENIYE GEDARA SASHANKA SANDARUWAN', 'address' => 'SAMA SEVANA SILVAS LAND RABUKPITIYA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Pahala Rambukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-030-00275', 'name' => 'DHARMASENA WIMALADHARMA', 'address' => '18 SILVERSLAND ,RAMBUKPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Pahala Rambukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-030-00276', 'name' => 'HERATH MUDIYANSELAGE JAYAWARDHANA', 'address' => 'HERATH GEDARA PAHALA RAMBUKPITIYA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Pahala Rambukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-030-00277', 'name' => 'POOJYA PARANAGAMA NARADA HIMI', 'address' => 'PURANA VCIHARAYA RAMBUKPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Pahala Rambukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-030-00278', 'name' => 'DUKGANNA PANIKKIYALAGE JENANDIYA', 'address' => 'DENIYA RMBUKAPITIYA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Pahala Rambukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-030-00279', 'name' => 'KAPUHENNAYA MUDIYANSELAGE JAYARATHNA BANDARA', 'address' => 'අංක 65 පහළ රඹුක්පිටිය', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Pahala Rambukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-030-00280', 'name' => 'KARUNA RANARAJA EKANAYAKE MUDIYANSELAGE SUDARMA KUMARI', 'address' => 'NO.65 WALAPITIYA, RAMBUKPITIYA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Pahala Rambukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-030-00281', 'name' => 'DAS MUDIYANSELAGE NALANI', 'address' => 'NO 06, UDA RABUKPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Pahala Rambukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-030-00282', 'name' => 'RANASINHA MUDIYANSELAGE KARUNADASA', 'address' => 'NO.03, THEDANBOYS, KALUGALHINNA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Pahala Rambukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-030-00283', 'name' => 'WELEGEDARA MUDIYANSELAGE DAYANI KANCHANA MADHUSHANI', 'address' => 'බද 12 CROWNDAS LAND RAMBUKPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Pahala Rambukpitiya'],

            // Application Processing (5)
            ['ref_no' => 'HH-2-1-57-02-030-00284', 'name' => 'SELLASAMI SATHYAMOORTHI', 'address' => '64 MEEPITIYA NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Pahala Rambukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-030-00287', 'name' => 'POOJYA PARANAGAMA NARADA HIMI', 'address' => 'PURANA VCIHARAYA RAMBUKPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Pahala Rambukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-030-00288', 'name' => 'HERATH MUDIYANSELAGE SOMAWATHI', 'address' => 'HERATH NIWASA PAHALA RAMBUKPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Pahala Rambukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-030-00289', 'name' => 'DUKGANNA PANIKKIYALAGE JENANDIYA', 'address' => 'DENIYA RMBUKAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Pahala Rambukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-030-00290', 'name' => 'KANAWIL DENIYE GEDARA SASHANKA SANDARUWAN', 'address' => 'SAMA SEVANA SILVAS LAND RABUKPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Pahala Rambukpitiya'],

            // Not Eligible (5)
            ['ref_no' => 'HH-2-1-57-02-030-00254', 'name' => 'KAPUHENNAYA MUDIYANSELAGE JAYARATHNA BANDARA', 'address' => 'අංක 65 පහළ රඹුක්පිටිය නාවලපිටිය', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Pahala Rambukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-030-00255', 'name' => 'KARUNA RANARAJA EKANAYAKE MUDIYANSELAGE SUDARMA KUMARI JAYASUNDARA', 'address' => 'NO.65 WALAPITIYA, RAMBUKPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Pahala Rambukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-030-00256', 'name' => 'DAS MUDIYANSELAGE NALANI', 'address' => 'NO 06, UDA RABUKPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Pahala Rambukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-030-00258', 'name' => 'RANASINHA MUDIYANSELAGE KARUNADASA', 'address' => 'NO.03, THEDANBOYS, KALUGALHINNA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Pahala Rambukpitiya'],
            ['ref_no' => 'HH-2-1-57-02-030-00259', 'name' => 'WARNAKULASOORIYA PATABADIGE PATRICIA FERNANDO', 'address' => 'NO104, RABUKPITIYA, NAWALAPITIYA.', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Pahala Rambukpitiya'],



            // Balantota North - 25 Records
            ['ref_no' => 'HH-2-1-57-02-100-00357', 'name' => 'HETTY ARATCHIGE DAYA PERERA', 'address' => 'NO123, SHANTHA COLONIYA, RABUPITIYA NAWALAPITIYA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Balantota North'],
            ['ref_no' => 'HH-2-1-57-02-100-00360', 'name' => 'A MUTHTHUKRISHNAN', 'address' => 'HORAGOLLA DIVISION BALANTHOTA SOUTH', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Balantota North'],
            ['ref_no' => 'HH-2-1-57-02-100-00361', 'name' => 'RAJAMANTREE GEDARA NIMAL SURAWEERA', 'address' => 'MATHALE WATTA BALANTHOTA RAMBUKPITIYA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Balantota North'],
            ['ref_no' => 'HH-2-1-57-02-100-00370', 'name' => 'SIVAKUMAR KAAJAN', 'address' => '08, HALDONAWATTE BALANTHOTA, RAMBUKPITIYA NAWALAPITIYA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Balantota North'],
            ['ref_no' => 'HH-2-1-57-02-100-00376', 'name' => 'MUNAWEERA ARACHCHILAGE RANJITH MUNASINGHA', 'address' => 'NO 57 NEW ST CLIVE BALANTHOTA RABUKPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Balantota North'],
            ['ref_no' => 'HH-2-1-57-02-100-00382', 'name' => 'WELIVITA WIDANALAGE INDRA', 'address' => 'NO.6 SHANTHA JANAPADAYA RAMBUKPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Balantota North'],
            ['ref_no' => 'HH-2-1-57-02-100-00384', 'name' => 'MADABAVITA VIDANALAGE ARUNA BANDARA', 'address' => '311/52 BALANTHOTA, RAMBUKPITIYA NAWALAPITIYA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Balantota North'],
            ['ref_no' => 'HH-2-1-57-02-100-00398', 'name' => 'RAJAPAKSHA MUDALIGE SEETHA RAJAPAKSHA', 'address' => '54/B ,NAWASHANTHA JANAPADAYA ,BALANTHOTA RAMBUKPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Balantota North'],
            ['ref_no' => 'HH-2-1-57-02-100-00339', 'name' => 'MOHOMMAD HANEEFA FATHUMMA ROOFINA', 'address' => '116/1 SHANTHA JANAPADAYA BALANTHOTA RABUKPITIYA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Balantota North'],
            ['ref_no' => 'HH-2-1-57-02-100-00400', 'name' => 'PUNCHI HEWAGE ARIYASHEELI', 'address' => '46 ,NAWASHANTHA COLANIYA ,BALANTHOTA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Balantota North'],
            ['ref_no' => 'HH-2-1-57-02-100-00351', 'name' => 'ANTHONY EDWARDCHARLES', 'address' => 'N.C DIVISION GALAMUDUNA WATTE DOLASBAGE', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Balantota North'],
            ['ref_no' => 'HH-2-1-57-02-100-00358', 'name' => 'FATHIMA JENNA JALEEL', 'address' => 'NO.29/3, SOISAKELE, NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Balantota North'],
            ['ref_no' => 'HH-2-1-57-02-100-00359', 'name' => 'SUPPAIYA SIVAPALAN', 'address' => 'N0. 28/111, KITHULTOTA PATUMAGA,BAWWAGAMA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Balantota North'],
            ['ref_no' => 'HH-2-1-57-02-100-00363', 'name' => 'RATHNAYAKA MUDHIYANSELAGE THARANGA SUMUDU RATHNAYAKA', 'address' => 'NO 48 B SANTHA JANAPADAYA BALANTHOTA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Balantota North'],
            ['ref_no' => 'HH-2-1-57-02-100-00372', 'name' => 'KOLHEN GAMARALALAGE GHANAWATHI', 'address' => '01, SHANTHA JANAPATHAYA BALANTHOTA RAMBUKPITIYA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Balantota North'],

            // Application Processing (5)

            ['ref_no' => 'HH-2-1-57-02-100-00199', 'name' => 'MOHOMMAD HANEEFA FATHUMMA ROOFINA', 'address' => '116/1 SHANTHA JANAPADAYA BALANTHOTA RABUKPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Balantota North'],
            ['ref_no' => 'HH-2-1-57-02-100-00400', 'name' => 'PUNCHI HEWAGE ARIYASHEELI', 'address' => '46 ,NAWASHANTHA COLANIYA ,BALANTHOTA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Balantota North'],
            ['ref_no' => 'HH-2-1-57-02-100-00351', 'name' => 'ANTHONY EDWARDCHARLES', 'address' => 'N.C DIVISION GALAMUDUNA WATTE DOLASBAGE', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Balantota North'],
            ['ref_no' => 'HH-2-1-57-02-100-00349', 'name' => 'MIRASA MOHOMED IQBAL', 'address' => '21/A ශාන්ත ජනපදය බලංතොට නාවලපිටිය', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Balantota North'],

            // Not Eligible (5)
            ['ref_no' => 'HH-2-1-57-02-100-00350', 'name' => 'KARUNAIN GEDARA KUMUDUMALI PIYASENA', 'address' => '27/1, SHANTHA JANAPADAYA, BALNTHOTA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Balantota North'],
            ['ref_no' => 'HH-2-1-57-02-100-00352', 'name' => 'HENNAYAKA MUDIYANSELAGE SISILA HENNAYAKA', 'address' => '30/159 නව ශාන්ත ජනපදය බලංතොට රඹුක්පිටිය', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Balantota North'],
            ['ref_no' => 'HH-2-1-57-02-100-00354', 'name' => 'EDIMULLA GEDARA INDAWATHIE', 'address' => 'NO 113-SHANTHA JANAPADAYA,BALANTHOTA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Balantota North'],
            ['ref_no' => 'HH-2-1-57-02-100-00355', 'name' => 'RAJAMANIKKAM GAYATHRI', 'address' => '254/B-5 BALANTHOTA, RAMBUKPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Balantota North'],
            ['ref_no' => 'HH-2-1-57-02-100-00356', 'name' => 'ILANGAKOON MUDIYANSELAGE MUTHU MENIKE', 'address' => 'GALAMUDUNA JANAPADAYA 4 KANUWA RAMBUKPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Balantota North'],


            // Balantota South - 25 Records
            ['ref_no' => 'HH-2-1-57-02-100-00360', 'name' => 'A MUTHTHUKRISHNAN', 'address' => 'HORAGOLLA DIVISION BALANTHOTA SOUTH', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Balantota South'],
            ['ref_no' => 'HH-2-1-57-02-100-00361', 'name' => 'RAJAMANTREE GEDARA NIMAL SURAWEERA', 'address' => 'MATHALE WATTA BALANTHOTA RAMBUKPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Balantota South'],
            ['ref_no' => 'HH-2-1-57-02-100-00370', 'name' => 'SIVAKUMAR KAAJAN', 'address' => '08, HALDONAWATTE BALANTHOTA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Balantota South'],
            ['ref_no' => 'HH-2-1-57-02-100-00376', 'name' => 'MUNAWEERA ARACHCHILAGE RANJITH MUNASINGHA', 'address' => 'NO 57 NEW ST CLIVE BALANTHOTA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Balantota South'],
            ['ref_no' => 'HH-2-1-57-02-100-00382', 'name' => 'WELIVITA WIDANALAGE INDRA', 'address' => 'NO.6 SHANTHA JANAPADAYA RAMBUKPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Balantota South'],
            ['ref_no' => 'HH-2-1-57-02-100-00384', 'name' => 'MADABAVITA VIDANALAGE ARUNA BANDARA', 'address' => '311/52 BALANTHOTA, RAMBUKPITIYA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Balantota South'],
            ['ref_no' => 'HH-2-1-57-02-100-00357', 'name' => 'HETTY ARATCHIGE DAYA PERERA', 'address' => 'NO123, SHANTHA COLONIYA, RABUPITIYA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Balantota South'],
            ['ref_no' => 'HH-2-1-57-02-100-00372', 'name' => 'KOLHEN GAMARALALAGE GHANAWATHI', 'address' => '01, SHANTHA JANAPATHAYA BALANTHOTA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Balantota South'],
            ['ref_no' => 'HH-2-1-57-02-100-00373', 'name' => 'MATHTHAMA GODAGE DON AMITH MATHTHAMAGODA', 'address' => 'NO 34/A ,SHANTHA JANAPADAYA BALANTHOTA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Balantota South'],
            ['ref_no' => 'HH-2-1-57-02-100-00398', 'name' => 'RAJAPAKSHA MUDALIGE SEETHA RAJAPAKSHA', 'address' => '54/B NAWASHANTHA JANAPADAYA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Balantota South'],
            ['ref_no' => 'HH-2-1-57-02-100-00399', 'name' => 'MOHOMMAD HANEEFA FATHUMMA ROOFINA', 'address' => '116/1 SHANTHA JANAPADAYA BALANTHOTA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Balantota South'],
            ['ref_no' => 'HH-2-1-57-02-100-00400', 'name' => 'PUNCHI HEWAGE ARIYASHEELI', 'address' => '46 NAWASHANTHA COLANIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Balantota South'],
            ['ref_no' => 'HH-2-1-57-02-100-00351', 'name' => 'ANTHONY EDWARDCHARLES', 'address' => 'N.C DIVISION GALAMUDUNA WATTE DOLASBAGE', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Balantota South'],
            ['ref_no' => 'HH-2-1-57-02-100-00358', 'name' => 'FATHIMA JENNA JALEEL', 'address' => 'NO.29/3, SOISAKELE', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Balantota South'],
            ['ref_no' => 'HH-2-1-57-02-100-00359', 'name' => 'SUPPAIYA SIVAPALAN', 'address' => '28/111, KITHULTOTA PATUMAGA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Balantota South'],

            // Application Processing (5)
            ['ref_no' => 'HH-2-1-57-02-100-00398', 'name' => 'RAJAPAKSHA MUDALIGE SEETHA RAJAPAKSHA', 'address' => '54/B ,NAWASHANTHA JANAPADAYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Balantota South'],
            ['ref_no' => 'HH-2-1-57-02-100-00319', 'name' => 'MOHOMMAD HANEEFA FATHUMMA ROOFINA', 'address' => '116/1 SHANTHA JANAPADAYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Balantota South'],
            ['ref_no' => 'HH-2-1-57-02-100-00400', 'name' => 'PUNCHI HEWAGE ARIYASHEELI', 'address' => '46 ,NAWASHANTHA COLANIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Balantota South'],
            ['ref_no' => 'HH-2-1-57-02-100-00351', 'name' => 'ANTHONY EDWARDCHARLES', 'address' => 'N.C DIVISION GALAMUDUNA WATTE', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Balantota South'],
            ['ref_no' => 'HH-2-1-57-02-100-00349', 'name' => 'MIRASA MOHOMED IQBAL', 'address' => '21/A ශාන්ත ජනපදය බලංතොට', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Balantota South'],

            // Not Eligible (5)
            ['ref_no' => 'HH-2-1-57-02-100-00350', 'name' => 'KARUNAIN GEDARA KUMUDUMALI PIYASENA', 'address' => '27/1, SHANTHA JANAPADAYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Balantota South'],
            ['ref_no' => 'HH-2-1-57-02-100-00352', 'name' => 'HENNAYAKA MUDIYANSELAGE SISILA HENNAYAKA', 'address' => '30/159 නව ශාන්ත ජනපදය', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Balantota South'],
            ['ref_no' => 'HH-2-1-57-02-100-00354', 'name' => 'EDIMULLA GEDARA INDAWATHIE', 'address' => 'NO 113-SHANTHA JANAPADAYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Balantota South'],
            ['ref_no' => 'HH-2-1-57-02-100-00355', 'name' => 'RAJAMANIKKAM GAYATHRI', 'address' => '254/B-5 BALANTHOTA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Balantota South'],
            ['ref_no' => 'HH-2-1-57-02-100-00356', 'name' => 'ILANGAKOON MUDIYANSELAGE MUTHU MENIKE', 'address' => 'GALAMUDUNA JANAPADAYA 4 KANUWA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Balantota South'],



            // Aluthgama - 25 Records
            ['ref_no' => 'HH-2-1-57-02-095-00346', 'name' => 'MANA UTHUM MUDIYANSELAGE LAKMALI RUWANI JAYAWARDANA', 'address' => 'NO 15,ALUTHGAMA,DEKINDA,NAWALAPITIYA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Aluthgama'],
            ['ref_no' => 'HH-2-1-57-02-095-00352', 'name' => 'NAWARATHNA MUDIYANSELAGE PRIYANTHI NAWARATHNA', 'address' => '23/53C, ALITHGAMA, DEKINDA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Aluthgama'],
            ['ref_no' => 'HH-2-1-57-02-095-00353', 'name' => 'HOREC CHARLES ELLIOT ANTHONY SLEMMERMAN', 'address' => 'DEKINDA, NAWALAPITIYA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Aluthgama'],
            ['ref_no' => 'HH-2-1-57-02-095-00356', 'name' => 'DAUNDA GEDARA DAYARATHNA', 'address' => 'KUSUM, NAWANGAMA , DEKINDA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Aluthgama'],
            ['ref_no' => 'HH-2-1-57-02-095-00380', 'name' => 'WEERASINGHE HETTI MUDIYANSELAGE PODINILAME', 'address' => '68 ALUTHGAMA DEKINDA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Aluthgama'],
            ['ref_no' => 'HH-2-1-57-02-095-00381', 'name' => 'MANAWARDANA GEDARA ENSOHAMINE', 'address' => 'NO 24 A ISADEEN JANAPADAYA WALIGAMPOLA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Aluthgama'],
            ['ref_no' => 'HH-2-1-57-02-095-00382', 'name' => 'HORATHAL PEDI GEDARA MAGINONA', 'address' => 'NO 45 ALUTHGAMA DEKINDA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Aluthgama'],
            ['ref_no' => 'HH-2-1-57-02-095-00383', 'name' => 'ALAPALADENIYE DAHANAYAKA KARUNAWATHI', 'address' => 'NO 69/1 ALUTHGAMA DEKINDA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Aluthgama'],
            ['ref_no' => 'HH-2-1-57-02-095-00384', 'name' => 'HERATH MUDIYANSELAGE WIMALAWATHI', 'address' => 'WERALUGOLLA JUNCTION DEKINDA ROAD', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Aluthgama'],
            ['ref_no' => 'HH-2-1-57-02-095-00385', 'name' => 'MEDAGAMMADDE GEDARA PREMAWATHEE', 'address' => '13 ISDEEN JANAPADAYA ,WALIGAMPOLA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Aluthgama'],
            ['ref_no' => 'HH-2-1-57-02-095-00386', 'name' => 'DRAADU KUMBURE GEDARA MUDALIHAMI', 'address' => '43 ,ALUTHGAMA DEKIDA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Aluthgama'],
            ['ref_no' => 'HH-2-1-57-02-095-00387', 'name' => 'RATHNAYAKA MUDIYANSELAGE SUMANADASA', 'address' => '06 ,ALUTHGAMA ,DEKIDA NAWALAPITIYA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Aluthgama'],
            ['ref_no' => 'HH-2-1-57-02-095-00388', 'name' => 'SAMARANAYAKA PODI ARACHCHILAGE WILSON', 'address' => '06 BALANTHOTA DEKIDA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Aluthgama'],
            ['ref_no' => 'HH-2-1-57-02-095-00389', 'name' => 'KADAWATH PELI GEDARA', 'address' => '25 BALANTHOTA WATHTHA ,DEKIDA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Aluthgama'],
            ['ref_no' => 'HH-2-1-57-02-095-00344', 'name' => 'HORATHAL PEDIGEDARA PUNCHI MANIKA', 'address' => '44 BATAHENA ALUTHGAMA DEKINDA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Aluthgama'],

            // Application Processing (5)
            ['ref_no' => 'HH-2-1-57-02-095-00380', 'name' => 'WEERASINGHE HETTI MUDIYANSELAGE PODINILAME', 'address' => '68 ALUTHGAMA DEKINDA NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Aluthgama'],
            ['ref_no' => 'HH-2-1-57-02-095-00381', 'name' => 'MANAWARDANA GEDARA ENSOHAMINE', 'address' => 'NO 24 A ISADEEN JANAPADAYA WALIGAMPOLA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Aluthgama'],
            ['ref_no' => 'HH-2-1-57-02-095-00382', 'name' => 'HORATHAL PEDI GEDARA MAGINONA', 'address' => 'NO 45 ALUTHGAMA DEKINDA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Aluthgama'],
            ['ref_no' => 'HH-2-1-57-02-095-00383', 'name' => 'ALAPALADENIYE DAHANAYAKA KARUNAWATHI', 'address' => 'NO 69/1 ALUTHGAMA DEKINDA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Aluthgama'],
            ['ref_no' => 'HH-2-1-57-02-095-00384', 'name' => 'HERATH MUDIYANSELAGE WIMALAWATHI', 'address' => 'WERALUGOLLA JUNCTION DEKINDA ROAD', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Aluthgama'],

            // Not Eligible (5)
            ['ref_no' => 'HH-2-1-57-02-095-00342', 'name' => 'GAMINI SARATHCHANDRA HEWAGAMAGE', 'address' => 'GANTHALAWA DEKINDA NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Aluthgama'],
            ['ref_no' => 'HH-2-1-57-02-095-00343', 'name' => 'SAMUDRA RATHNAYAKA', 'address' => '03,ISADIN SOUTH WALIGAMPOLA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Aluthgama'],
            ['ref_no' => 'HH-2-1-57-02-095-00345', 'name' => 'WEERASINGHA HETTI MUDIYANSELAGE ANIL KUMARA WEERASINGHE', 'address' => 'NO61/1,ALUTHGAMA,DEKINDA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Aluthgama'],
            ['ref_no' => 'HH-2-1-57-02-095-00350', 'name' => 'RANADUNGA WIJAYA WARDANALAGE INDRANI', 'address' => 'NO 13, BALANTHOTA WATTAHA DEKINDA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Aluthgama'],
            ['ref_no' => 'HH-2-1-57-02-095-00351', 'name' => 'AMARASURIYAGE NIMAL AMARASINGHA', 'address' => 'B83, ALUTHGAMA, DEKINDA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Aluthgama'],



            // Wewegama - 25 Records
            ['ref_no' => 'HH-2-1-57-02-140-00544', 'name' => 'VEERAN KALYANI', 'address' => 'GALABODA LOWER DIVISION, GALABODA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Wewegama'],
            ['ref_no' => 'HH-2-1-57-02-140-00545', 'name' => 'WELLASAMI KARUPPAI', 'address' => 'GALABODA DIVITION GALABODA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Wewegama'],
            ['ref_no' => 'HH-2-1-57-02-140-00546', 'name' => 'NAGAIYA', 'address' => 'GALABODA DIVITION GALABODA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Wewegama'],
            ['ref_no' => 'HH-2-1-57-02-140-00547', 'name' => 'ARUMUGAM VISHVANATHAN', 'address' => 'GALABODA ESTET,UPPER DIVISION', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Wewegama'],
            ['ref_no' => 'HH-2-1-57-02-140-00548', 'name' => 'RAJAMANI ROBAT KENADI', 'address' => 'GALABODA ESTATE,THELAMALE', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Wewegama'],
            ['ref_no' => 'HH-2-1-57-02-140-00549', 'name' => 'BALAKRISHNAM', 'address' => 'GALABADA ESTATE GALABODA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Wewegama'],
            ['ref_no' => 'HH-2-1-57-02-140-00550', 'name' => 'NAWARATHNAMUDIYANSELAGE CHANDRA NAWARATHNA MENIKE', 'address' => 'NO.175/2, WAWEGAMA, DEKINDA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Wewegama'],
            ['ref_no' => 'HH-2-1-57-02-140-00633', 'name' => 'M A SARATH KUMARA', 'address' => 'GALABODA UPPER DIVISION , GALABODA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Wewegama'],
            ['ref_no' => 'HH-2-1-57-02-140-00660', 'name' => 'KRISHNAPILLEI SAKKRESHWARI', 'address' => 'GALABODA NC DIVISION GALABODA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Wewegama'],
            ['ref_no' => 'HH-2-1-57-02-140-00661', 'name' => 'SAMARAKOON MUDIYANSELAGE BISOMANIKE', 'address' => '175/2 - WAWEGAMA DEKINDA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Wewegama'],
            ['ref_no' => 'HH-2-1-57-02-140-00662', 'name' => 'MADATHI VELAYAN', 'address' => 'GALABODA UPPER DIVISION GALABODA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Wewegama'],
            ['ref_no' => 'HH-2-1-57-02-140-00663', 'name' => 'PERUMAL RAMAI', 'address' => 'GALABODA LOWER DIVISION GALABODA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Wewegama'],
            ['ref_no' => 'HH-2-1-57-02-140-00664', 'name' => 'PAMBAYAN PALANIYANDI', 'address' => 'GALABODA TOP DIVISION GALABODA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Wewegama'],
            ['ref_no' => 'HH-2-1-57-02-140-00665', 'name' => 'KUMBURUHENE GEDARA PREMAWATHI', 'address' => '176/2 WEWEGAMA, DEKIDA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Wewegama'],
            ['ref_no' => 'HH-2-1-57-02-140-00666', 'name' => 'THANGAMMA MUNIYANDI', 'address' => 'GALABODA WATHTHA GALABODA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Wewegama'],

            // Application Processing (5)
            ['ref_no' => 'HH-2-1-57-02-140-00668', 'name' => 'MUNIYANDI WELLAYAMMA', 'address' => 'PAHALA KOTASA GALABODA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Wewegama'],
            ['ref_no' => 'HH-2-1-57-02-140-00669', 'name' => 'PALANIYANDI KALIYAMMA', 'address' => 'GALABODA TOP DIVISION GALABODA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Wewegama'],
            ['ref_no' => 'HH-2-1-57-02-140-00670', 'name' => 'MOOKAN PERUMAL', 'address' => 'GALBODA ESTATE GALABODA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Wewegama'],
            ['ref_no' => 'HH-2-1-57-02-140-00671', 'name' => 'SUNDARAM ALAGAMMA', 'address' => 'MONTICRISTOR ESTATE GALABODA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Wewegama'],
            ['ref_no' => 'HH-2-1-57-02-140-00672', 'name' => 'SUPPAIYA MUTHTHIYA', 'address' => 'GALABODA ,NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Wewegama'],

            // Not Eligible (5)
            ['ref_no' => 'HH-2-1-57-02-105-00173', 'name' => 'ALAGESWARAN SARATHA', 'address' => 'GALABODA WATTA, GALABODA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Wewegama'],
            ['ref_no' => 'HH-2-1-57-02-140-00598', 'name' => 'KEKIRIGODA MALLAWA ARATCHILAGE BUDDIKA INDUNIL OBESEKARA', 'address' => 'NO 03. TEMPAL ROAD, GALABODA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Wewegama'],
            ['ref_no' => 'HH-2-1-57-01-145-00728', 'name' => 'KULANDEY GABRIAL', 'address' => 'FACTORY DIVISION, GALABODA ESTATE', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Wewegama'],
            ['ref_no' => 'HH-2-1-57-02-140-00673', 'name' => 'WIJEKOON MUDIYANSELAGE CHITHRASENA', 'address' => '361/102 - GALABODA ESTATE LOWER DIVISION', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Wewegama'],
            ['ref_no' => 'HH-2-1-57-02-140-00674', 'name' => 'ARULANDU YOGARAS', 'address' => 'LOWER DIVISION, GALABODA GALABODA ESTATE', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Wewegama'],






            // Kandopitiya - 25 Records
            ['ref_no' => 'HH-2-1-57-02-090-00574', 'name' => 'RANAVAKA GEDARA ANULAWATHI', 'address' => 'NO.08,HAINFORT, B, WELIGAMPOLA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Kandopitiya'],
            ['ref_no' => 'HH-2-1-57-02-090-00649', 'name' => 'PINNADOOWA HEWAGE GUNASEELA', 'address' => 'HYNFORD B - MAPAKANDA ROAD WALIGAMPOLA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Kandopitiya'],
            ['ref_no' => 'HH-2-1-57-02-090-00650', 'name' => 'HETTI ARACHCHILAGE ANULAWATHI', 'address' => '47/1 HYNFORD A KANDOPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Kandopitiya'],
            ['ref_no' => 'HH-2-1-57-02-090-00651', 'name' => 'PALU KUMBURE GEDARA DHARMADASA', 'address' => '07 ,WALIGAMPOLA NAWALAPITIYA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Kandopitiya'],
            ['ref_no' => 'HH-2-1-57-02-090-00652', 'name' => 'SIVANU RAJENDRAN', 'address' => '102 A HYNFORD MAPAKANDA ROAD', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Kandopitiya'],
            ['ref_no' => 'HH-2-1-57-02-090-00653', 'name' => 'WEL VIDANALAGE DON EDWARD SILVA', 'address' => '51 WERALUGOLLA DEKINDA NAWALAPITIYA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Kandopitiya'],
            ['ref_no' => 'HH-2-1-57-02-090-00654', 'name' => 'PONNAMPERUMA ARACHCHIGE DAYAWATHI', 'address' => '195/7 KANDOPITIYA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Kandopitiya'],
            ['ref_no' => 'HH-2-1-57-02-090-00655', 'name' => 'ALAHAKOON MUDIYANSELAGE MUDIYANSE', 'address' => 'WERALUGOLLA HYNFORD A DEKINDA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Kandopitiya'],
            ['ref_no' => 'HH-2-1-57-02-090-00656', 'name' => 'KARUPPAIAH KUREIRAJ', 'address' => '70/1 DEKINDA ROAD NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Kandopitiya'],
            ['ref_no' => 'HH-2-1-57-02-090-00657', 'name' => 'PERIYASAMI PETER', 'address' => 'NO 58 HYNFORD A DEKINDA ROAD', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Kandopitiya'],
            ['ref_no' => 'HH-2-1-57-02-090-00658', 'name' => 'RANKOTH PEDI GEDARA SUMANAWATHI', 'address' => 'CHANDANA NIWASA HYNFORD A WALIGAMPOLA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Kandopitiya'],
            ['ref_no' => 'HH-2-1-57-02-090-00659', 'name' => 'BINDUHEWA MUDIYANSELAGE TUDER RATHNAWEERA', 'address' => '64 HINFORD B NAWALAPITIYA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Kandopitiya'],
            ['ref_no' => 'HH-2-1-57-02-090-00660', 'name' => 'KUREISHA RAHUMAN', 'address' => '136 WALIGAMPOLA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Kandopitiya'],
            ['ref_no' => 'HH-2-1-57-02-090-00661', 'name' => 'SINNAMMA RAJU', 'address' => '194/1 HAPUGAHAMULA WATHTHA KANDOPITIYA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Kandopitiya'],
            ['ref_no' => 'HH-2-1-57-02-090-00662', 'name' => 'AMBALANGODA LIYANARALALAGE MOREEN FERNANDO', 'address' => '01 HYNFORD A WALIGAMPOLA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Kandopitiya'],

            // Application Processing (5)
            ['ref_no' => 'HH-2-1-57-02-090-00649', 'name' => 'PINNADOOWA HEWAGE GUNASEELA', 'address' => 'HYNFORD B - MAPAKANDA ROAD', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Kandopitiya'],
            ['ref_no' => 'HH-2-1-57-02-090-00650', 'name' => 'HETTI ARACHCHILAGE ANULAWATHI', 'address' => '47/1 HYNFORD A KANDOPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Kandopitiya'],
            ['ref_no' => 'HH-2-1-57-02-090-00651', 'name' => 'PALU KUMBURE GEDARA DHARMADASA', 'address' => '07 ,WALIGAMPOLA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Kandopitiya'],
            ['ref_no' => 'HH-2-1-57-02-090-00652', 'name' => 'SIVANU RAJENDRAN', 'address' => '102 A HYNFORD MAPAKANDA ROAD', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Kandopitiya'],
            ['ref_no' => 'HH-2-1-57-02-090-00653', 'name' => 'WEL VIDANALAGE DON EDWARD SILVA', 'address' => '51 WERALUGOLLA DEKINDA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Kandopitiya'],

            // Not Eligible (5)
            ['ref_no' => 'HH-2-1-57-02-090-00568', 'name' => 'KAILASAM BALAMANY', 'address' => 'NO.14, HYFORD A, DEKINDA ROAD', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Kandopitiya'],
            ['ref_no' => 'HH-2-1-57-02-090-00570', 'name' => 'ABDHUL HAMEED SITHTHI MARLIYA', 'address' => '07 LABUWELKOTUWA WELIGAMPOLA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Kandopitiya'],
            ['ref_no' => 'HH-2-1-57-02-090-00571', 'name' => 'JAYARAM ANITHA', 'address' => '9/2/WELIGAMPOLA JUNCION', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Kandopitiya'],
            ['ref_no' => 'HH-2-1-57-02-090-00573', 'name' => 'MANIKKAM SARASWATHI', 'address' => '184/3 WELIGAMPOLA RD NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Kandopitiya'],
            ['ref_no' => 'HH-2-1-57-02-090-00574', 'name' => 'RANAVAKA GEDARA ANULAWATHI', 'address' => 'NO.08,HAINFORT, B, WELIGAMPOLA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Kandopitiya'],



            // Inguruoya South - 25 Records
            ['ref_no' => 'HH-2-1-57-01-130-00203', 'name' => 'ANNAMALAI THAMILSELVI', 'address' => 'PENRHOSE ESTATE ,GALABODA ,NAWALAPITIYA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Inguruoya South'],
            ['ref_no' => 'HH-2-1-57-01-130-00204', 'name' => 'PERIYAN THAMIL SELVI', 'address' => 'පෙන්රෝස් වත්ත ගලබොඩ නාවලපිටිය', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Inguruoya South'],
            ['ref_no' => 'HH-2-1-57-01-130-00206', 'name' => 'RATHNAYAKA MUDIYANSELAGE BHAGYA IROSHANI', 'address' => 'NO/ 16, INGURUOYA SOUTH GALABADA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Inguruoya South'],
            ['ref_no' => 'HH-2-1-57-01-130-00208', 'name' => 'SANGAPILLE ANDI AMBUMALAR', 'address' => 'PENROSE INGURUOYA SOUTH', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Inguruoya South'],
            ['ref_no' => 'HH-2-1-57-01-130-00209', 'name' => 'SEKAR KARTHIKESAN', 'address' => 'PENROSE ESTATE, NAWALAPITIYA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Inguruoya South'],
            ['ref_no' => 'HH-2-1-57-01-130-00213', 'name' => 'GANESHAN MALLIGA', 'address' => '025, PENROSE ESTATE GALABODA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Inguruoya South'],
            ['ref_no' => 'HH-2-1-57-01-130-00214', 'name' => 'KANDASAMY GANESHAN', 'address' => '123 PENROSE ESTATE GALABODA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Inguruoya South'],
            ['ref_no' => 'HH-2-1-57-01-130-00215', 'name' => 'SINNATHAMBI PAKKIYAM', 'address' => 'PENROSH ESTATE GALABODA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Inguruoya South'],
            ['ref_no' => 'HH-2-1-57-01-130-00217', 'name' => 'SELAMBARAM JANAKI', 'address' => 'NO.28/2, PENROSE WATTA, IGURUOYA SOUTH', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Inguruoya South'],
            ['ref_no' => 'HH-2-1-57-01-130-00219', 'name' => 'SEBASTIYAN MARIYA RATHNAM', 'address' => 'C/O SUBAWEERA KADE INGURUOYA NORTH GALABODA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Inguruoya South'],
            ['ref_no' => 'HH-2-1-57-01-130-00220', 'name' => 'YOGARASAN SIRIDEVI', 'address' => 'PENROS WATTA GALABODA NAWALAPITIYA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Inguruoya South'],
            ['ref_no' => 'HH-2-1-57-01-130-00244', 'name' => 'ANTHONY PONNAMMA', 'address' => 'INGURUOYA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Inguruoya South'],
            ['ref_no' => 'HH-2-1-57-01-130-00245', 'name' => 'KOSGOLLE GEDARA CHANDRAWATHI', 'address' => 'PENROSE WATHTHA GALABODA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Inguruoya South'],
            ['ref_no' => 'HH-2-1-57-01-130-00246', 'name' => 'KATEPITA GEDARA SOMAWATHI', 'address' => '186 INGURUOYA SOUTH NAWALAPITYA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Inguruoya South'],
            ['ref_no' => 'HH-2-1-57-01-130-00247', 'name' => 'WELANTHALAWE ALAS BALASOORIYA', 'address' => '164 IGURUOYA SOUTH GALABODA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Inguruoya South'],

            // Application Processing (5)
            ['ref_no' => 'HH-2-1-57-01-130-00244', 'name' => 'ANTHONY PONNAMMA', 'address' => 'INGURUOYA NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Inguruoya South'],
            ['ref_no' => 'HH-2-1-57-01-130-00245', 'name' => 'KOSGOLLE GEDARA CHANDRAWATHI', 'address' => 'PENROSE WATHTHA GALABODA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Inguruoya South'],
            ['ref_no' => 'HH-2-1-57-01-130-00246', 'name' => 'KATEPITA GEDARA SOMAWATHI', 'address' => '186 INGURUOYA SOUTH', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Inguruoya South'],
            ['ref_no' => 'HH-2-1-57-01-130-00247', 'name' => 'WELANTHALAWE ALAS BALASOORIYA', 'address' => '164 IGURUOYA SOUTH GALABODA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Inguruoya South'],
            ['ref_no' => 'HH-2-1-57-01-130-00248', 'name' => 'ABDHUL GUHAR KAN', 'address' => '52 IGURUOYA NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Inguruoya South'],

            // Not Eligible (5)
            ['ref_no' => 'HH-2-1-57-01-130-00202', 'name' => 'KANAPATHI SUGANIYA', 'address' => 'පෙන්රෝස් වත්ත ගලබොඩ නාවලපිටිය', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Inguruoya South'],
            ['ref_no' => 'HH-2-1-57-01-130-00205', 'name' => 'JHON PEETER GEORGE NIKALAS', 'address' => 'PENROSE ESTET, IGURUOYA SOUTH', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Inguruoya South'],
            ['ref_no' => 'HH-2-1-57-01-130-00207', 'name' => 'MOHOMED SHA MOHOMED MAHAROOF', 'address' => '40/1 INGURUOYA SOUTH GALABODA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Inguruoya South'],
            ['ref_no' => 'HH-2-1-57-01-130-00210', 'name' => 'KAUDUPITIYA MUDIYANSELAGE JANAK DHESHAPRIYA', 'address' => 'IDURUOYA SOUTH, GALABODA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Inguruoya South'],
            ['ref_no' => 'HH-2-1-57-01-130-00211', 'name' => 'BORALA ADAPPA GAMAGE SUBATHRA AIRANAGANI', 'address' => 'NO2/D, INGURUOYA,GALABODA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Inguruoya South'],



            // Inguruoya North - 25 Records
            ['ref_no' => 'HH-2-1-57-01-115-00327', 'name' => 'RASAIA SUNENDREN', 'address' => '34 නව ගම්මානය ඉගුරුඔය උතුර නාවලපිටිය', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Inguruoya North'],
            ['ref_no' => 'HH-2-1-57-01-115-00328', 'name' => 'BHODHI PAKSHAGE IVON MANUSHIKA MANUSHIKA BARNAT', 'address' => '226 නවගම්මානය ඉගුරුඔය නාාවලපිටිය', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Inguruoya North'],
            ['ref_no' => 'HH-2-1-57-01-115-00329', 'name' => 'FATHIMA USNIYA', 'address' => 'NO 52/B,INGURUOYA ,NAWALAPITIYA.', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Inguruoya North'],
            ['ref_no' => 'HH-2-1-57-01-115-00330', 'name' => 'SINNAIYA VALLIAMMA', 'address' => '24 නව ගම්මානය ඉඟුරුඔය උතුර', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Inguruoya North'],
            ['ref_no' => 'HH-2-1-57-01-115-00331', 'name' => 'SIVANU RAVINDRAKUMAR', 'address' => 'SEN SEBASTIYAN ESTATE,INGURUOYA NORTH,NAWLAPITIYA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Inguruoya North'],
            ['ref_no' => 'HH-2-1-57-01-115-00332', 'name' => 'SUPPAIYA AMMASI', 'address' => '', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Inguruoya North'],
            ['ref_no' => 'HH-2-1-57-01-115-00333', 'name' => 'JAYASIGHA ARATCHIGE PREMALATHA', 'address' => 'NO.08 NAWAGAMMANA,IGURUOYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Inguruoya North'],
            ['ref_no' => 'HH-2-1-57-01-115-00334', 'name' => 'SAROJANI', 'address' => 'PENROS STATE, GALABODA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Inguruoya North'],
            ['ref_no' => 'HH-2-1-57-01-115-00337', 'name' => 'RAJAMANTHRI GEDARA EVLIN PERERA', 'address' => 'NO230, NAWAGAMMANAYA, INGURUOYA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Inguruoya North'],
            ['ref_no' => 'HH-2-1-57-01-115-00338', 'name' => 'KANAGARATHNA MUDIYANSELAGE MALANI PODIMANIKE', 'address' => '05 INGURUOYA NORTH NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Inguruoya North'],
            ['ref_no' => 'HH-2-1-57-01-115-00342', 'name' => 'PALANIYANDI LECHCHAMI', 'address' => '249 නව ගම්මානය ඉඏරුඹය උතුර නාවලපිටිය', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Inguruoya North'],
            ['ref_no' => 'HH-2-1-57-01-115-00343', 'name' => 'JAYASINGHA GEDARA UPEKSHA DILRUKSHI', 'address' => '193 නව ගම්මානය ඉඟුරුඹය උතුර නාවලපිටිය', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Inguruoya North'],
            ['ref_no' => 'HH-2-1-57-01-115-00344', 'name' => 'KORALE GEDARA PODI NILAME', 'address' => '42 නව ගම්මානය ඉඟුරුඹය උතුර නාවලපිටිය', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Inguruoya North'],
            ['ref_no' => 'HH-2-1-57-01-115-00345', 'name' => 'KALIMUTTU MANOHARAN', 'address' => '195 නවගම්මානය ඉඟුරුඹය උතුර නාවලපිටිය', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Inguruoya North'],
            ['ref_no' => 'HH-2-1-57-01-115-00362', 'name' => 'PALANIAMMA MARADAMUTHTHU', 'address' => 'NO 4 NAWA GAMMANAYA -INGURUOYA NORTH', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Inguruoya North'],

            // Application Processing (5)
            ['ref_no' => 'HH-2-1-57-01-115-00362', 'name' => 'PALANIAMMA MARADAMUTHTHU', 'address' => 'NO 4 NAWA GAMMANAYA -INGURUOYA NORTH', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Inguruoya North'],
            ['ref_no' => 'HH-2-1-57-01-115-00363', 'name' => 'YAMILLE GEDARA ALIS', 'address' => '148 - NAWAGAMMANAYA INGURUOYA NORTH', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Inguruoya North'],
            ['ref_no' => 'HH-2-1-57-01-115-00364', 'name' => 'HERATH BANDARALAGE PREMADASA', 'address' => 'NO 41 INGURUOYA NORTH', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Inguruoya North'],
            ['ref_no' => 'HH-2-1-57-01-115-00365', 'name' => 'JALAL MAHAMOORDEEN THAWUS', 'address' => '160 - NAWAGAMMANAYA INGURUOYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Inguruoya North'],
            ['ref_no' => 'HH-2-1-57-01-115-00366', 'name' => 'GANILA MUDALIGE MAGRAT', 'address' => '156 NAWAGAMMANAYA IGURUOYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Inguruoya North'],

            // Not Eligible (5)
            ['ref_no' => 'HH-2-1-57-01-115-00335', 'name' => 'YOGALECHCHAMI', 'address' => '15 NAWAGAMMANAYA, INGURUOYA NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Inguruoya North'],
            ['ref_no' => 'HH-2-1-57-01-115-00339', 'name' => 'KARUNAMUNI MALANI DE SILVA', 'address' => '66 ඉඟුරුඹය උතුර නාවලපිටිය', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Inguruoya North'],
            ['ref_no' => 'HH-2-1-57-01-115-00340', 'name' => 'AMBU ARACHCHILLAGE ROHAN PRADEEP BANDARA', 'address' => '225 නව ගම්මානය ඉඟුරුඹය උතුර', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Inguruoya North'],
            ['ref_no' => 'HH-2-1-57-01-115-00341', 'name' => 'SELLAYYA KANDASAMY KASTHURI', 'address' => '130 නව ගම්මානය ඉඟුරුඹය උතුර', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Inguruoya North'],
            ['ref_no' => 'HH-2-1-57-01-115-00368', 'name' => 'BORALA ADPPAGODAGAMAGE PREMAWATHEE', 'address' => '155 HANDARAN OYA GAMA ,IGURUOYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Inguruoya North'],



            // Mapakanda North - 25 Records
            ['ref_no' => 'HH-2-1-57-02-110-00265', 'name' => 'KADHAR BAWA RUKIYA UMMA', 'address' => 'NO 35, HYNFORT COLONI,MAPAKANDA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Mapakanda North'],
            ['ref_no' => 'HH-2-1-57-02-110-00269', 'name' => 'WEERASINGHE ARACHCHILAGE NILMALA PRASANTHI', 'address' => '104 MAPAKANDA NORTH NAWALAPITIYA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Mapakanda North'],
            ['ref_no' => 'HH-2-1-57-02-110-00271', 'name' => 'KONARA MUDIYANSELAGE AJANTHA KUMARI', 'address' => '239/2/C, MAPAKANDA NORTH', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Mapakanda North'],
            ['ref_no' => 'HH-2-1-57-02-110-00277', 'name' => 'JAYASINGHE PATHIRANALAGE NIROSHA DILRUKSHI', 'address' => '249/5 HYNFORD COLONY MAPAKAND NORTH', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Mapakanda North'],
            ['ref_no' => 'HH-2-1-57-02-110-00291', 'name' => 'RAMANAYAKALAGE SAMATHAPALA', 'address' => 'HYNFORD JANAPADAYA MAPAKANDA NORTH', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Mapakanda North'],
            ['ref_no' => 'HH-2-1-57-02-110-00292', 'name' => 'KALUARACHCHI KODITHUWAKKUGE KARUNAWATHE', 'address' => '47 HYNFORD COLONY MAPAKANDA NORTH', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Mapakanda North'],
            ['ref_no' => 'HH-2-1-57-02-110-00293', 'name' => 'KANDERALALAGE HEENMANIKE', 'address' => 'MAPAKANDA NORTH NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Mapakanda North'],
            ['ref_no' => 'HH-2-1-57-02-110-00294', 'name' => 'MANAWA UTHUM MUDIYANSELAGE MUTHUMANIKE', 'address' => 'NO 93 MAPAKANDA NORTH', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Mapakanda North'],
            ['ref_no' => 'HH-2-1-57-02-110-00295', 'name' => 'KANDEGEDARA YASAWATHI', 'address' => '249 MAPAKANDA NORTH', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Mapakanda North'],
            ['ref_no' => 'HH-2-1-57-02-110-00296', 'name' => 'PATHMA GUNASELI HEWASINGHE', 'address' => 'SINGHELENA MAPAKANDA NORTH', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Mapakanda North'],
            ['ref_no' => 'HH-2-1-57-02-110-00297', 'name' => 'SHAMAL MADUSHAN', 'address' => '227/A MAPAKANDA NORTH', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Mapakanda North'],
            ['ref_no' => 'HH-2-1-57-02-110-00298', 'name' => 'ABDUL RASAK FATHIMA RIMSANA', 'address' => '70 MAPAKANDHA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Mapakanda North'],
            ['ref_no' => 'HH-2-1-57-02-110-00299', 'name' => 'KANANGAMA ARACHCHILAGE KARUNAWATHEE', 'address' => '19 ,MAPAKANDA NORTH', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Mapakanda North'],
            ['ref_no' => 'HH-2-1-57-02-110-00300', 'name' => 'KATUWALAGE TIKIRI BANDA', 'address' => 'MAPAKANDA NORTH NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Mapakanda North'],
            ['ref_no' => 'HH-2-1-57-02-110-00262', 'name' => 'HEWA BAHITHAGE RUCHIRA SANDEEPANI DAYARATHNA', 'address' => '248/B මාපාකන්ද උතුර නාවලපිටිය', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Mapakanda North'],

            // Application Processing (5)
            ['ref_no' => 'HH-2-1-57-02-110-00291', 'name' => 'RAMANAYAKALAGE SAMATHAPALA', 'address' => 'HYNFORD JANAPADAYA MAPAKANDA NORTH', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Mapakanda North'],
            ['ref_no' => 'HH-2-1-57-02-110-00292', 'name' => 'KALUARACHCHI KODITHUWAKKUGE KARUNAWATHE', 'address' => '47 HYNFORD COLONY MAPAKANDA NORTH', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Mapakanda North'],
            ['ref_no' => 'HH-2-1-57-02-110-00293', 'name' => 'KANDERALALAGE HEENMANIKE', 'address' => 'MAPAKANDA NORTH NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Mapakanda North'],
            ['ref_no' => 'HH-2-1-57-02-110-00294', 'name' => 'MANAWA UTHUM MUDIYANSELAGE MUTHUMANIKE', 'address' => 'NO 93 MAPAKANDA NORTH', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Mapakanda North'],
            ['ref_no' => 'HH-2-1-57-02-110-00295', 'name' => 'KANDEGEDARA YASAWATHI', 'address' => '249 MAPAKANDA NORTH', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Mapakanda North'],

            // Not Eligible (5)
            ['ref_no' => 'HH-2-1-57-02-110-00264', 'name' => 'GALLINDE GEDARA GUNATHILAKE MUDIYANSELAGE PATHMA KUMARIHAMY', 'address' => '96 මාපාකන්ද උතුර නාවලපිටිය', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Mapakanda North'],
            ['ref_no' => 'HH-2-1-57-02-110-00266', 'name' => 'LALANI GURUSINGHA', 'address' => '', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Mapakanda North'],
            ['ref_no' => 'HH-2-1-57-02-110-00267', 'name' => 'ATHUKORALAGE UDAYANI SAKUNTHALA', 'address' => '122 MAPAKANDA NORTH', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Mapakanda North'],
            ['ref_no' => 'HH-2-1-57-02-110-00268', 'name' => 'DIYUNUGALAGE DHANUSHKA NAYOMO SISIRA KUMARA', 'address' => '128 MAPAKANDA NORTH', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Mapakanda North'],
            ['ref_no' => 'HH-2-1-57-02-110-00270', 'name' => 'NIMAL KUMARASIRI HEWASINGHE', 'address' => 'NO238/A MAPAKANDA NORTH', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Mapakanda North'],


            // Mapakanda South - 25 Records
            ['ref_no' => 'HH-2-1-57-02-135-00305', 'name' => 'NIMESHI SENURIKA WICKARAMASINGHE', 'address' => 'නො60/1 මාපාකන්ද දකුන,නාවලපිටිය', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Mapakanda South'],
            ['ref_no' => 'HH-2-1-57-02-135-00306', 'name' => 'KARUPAIYA THANALETCHUMI', 'address' => 'NO.18, HILL ROAD, NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Mapakanda South'],
            ['ref_no' => 'HH-2-1-57-02-135-00307', 'name' => 'MARASINHA MUDIYANSELAGE BISOMENIKE', 'address' => '104/D, MAPAKANDA SOUTH', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Mapakanda South'],
            ['ref_no' => 'HH-2-1-57-02-135-00308', 'name' => 'PRABATH MADUSANKA', 'address' => '46/A MAPAKANDA SOUTH NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Mapakanda South'],
            ['ref_no' => 'HH-2-1-57-02-135-00309', 'name' => 'POLLWATHTHA GALLAGE LEELAWATHI', 'address' => 'NO94,MAOAKANDA,NAWALAPITIYA.', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Mapakanda South'],
            ['ref_no' => 'HH-2-1-57-02-135-00310', 'name' => 'HEWA BAHITHAGE LALITHA', 'address' => '94/3 මාපාකන්ද දකුණ නාවලපිටිය', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Mapakanda South'],
            ['ref_no' => 'HH-2-1-57-02-135-00311', 'name' => 'SANDAKKARA GAMARALALAGE APSARA SANDAMALI PERERA', 'address' => '106/1 MAPAKANDA SOUTH', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Mapakanda South'],
            ['ref_no' => 'HH-2-1-57-02-135-00312', 'name' => 'THUDAWA HEWAGE PIYARATHNA', 'address' => '207 MAPAKANDA SOUTH NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Mapakanda South'],
            ['ref_no' => 'HH-2-1-57-02-135-00313', 'name' => 'WEERASINGHE ARACHCHILAGE NIRMALA PRASANTHI', 'address' => '120, MAPAKANDA SOUTH NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Mapakanda South'],
            ['ref_no' => 'HH-2-1-57-02-135-00314', 'name' => 'HERATH MUDIYANSELAGE SRIYANI MANGALIKA', 'address' => '56 MAPAKANDA SOUTH NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Mapakanda South'],
            ['ref_no' => 'HH-2-1-57-02-135-00315', 'name' => 'MADUMALI EKANAYAKA', 'address' => '104, MAPAKANDA SOUTH MAPAKANDA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Mapakanda South'],
            ['ref_no' => 'HH-2-1-57-02-135-00316', 'name' => 'WADANAHALGE PAHALA GEDARA KAUSHALYA MADHUSHANI WIJESINGHE', 'address' => 'NO 110 MAPAKANDA SOUTH', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Mapakanda South'],
            ['ref_no' => 'HH-2-1-57-02-135-00317', 'name' => 'LAKSAGE JAYARATHNA', 'address' => 'NO 50/A MAPAKANDA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Mapakanda South'],
            ['ref_no' => 'HH-2-1-57-02-135-00318', 'name' => 'LAKSHAHGE PEMAWATHI', 'address' => '51 MAPAKANDA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Mapakanda South'],
            ['ref_no' => 'HH-2-1-57-02-135-00319', 'name' => 'WICKRAMAGEDARA CHINTHAKA LAXAN JAYASENA', 'address' => 'NO 81 MAPAKANDA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Mapakanda South'],

            // Application Processing (5)
            ['ref_no' => 'HH-2-1-57-02-135-00326', 'name' => 'POLWATTHE GEDARA BEBY NONA', 'address' => 'MAPAKANDA SOUTH NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Mapakanda South'],
            ['ref_no' => 'HH-2-1-57-02-135-00327', 'name' => 'IMAKOHU GEDARA ROSALIN NONA', 'address' => 'MAPAKANDA SOUTH NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Mapakanda South'],
            ['ref_no' => 'HH-2-1-57-02-135-00328', 'name' => 'VINEETHA RAJAPAKSHA', 'address' => 'NO 124/C, MAPAKANDA SOUTH', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Mapakanda South'],
            ['ref_no' => 'HH-2-1-57-02-135-00329', 'name' => 'KAMMALGODA MUDALIGE PIYATHILAKA', 'address' => '91 ,MAPAKANDA NORTH', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Mapakanda South'],
            ['ref_no' => 'HH-2-1-57-02-135-00307', 'name' => 'NIMESHI SENURIKA WICKARAMASINGHE', 'address' => 'නො60/1 මාපාකන්ද දකුන', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Mapakanda South'],

            // Not Eligible (5)
            ['ref_no' => 'HH-2-1-57-02-135-00310', 'name' => 'PRABATH MADUSANKA', 'address' => '46/A MAPAKANDA SOUTH', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Mapakanda South'],
            ['ref_no' => 'HH-2-1-57-02-135-00313', 'name' => 'SUWANDA ARACHCHIGE DON AMAL ISHANTHA', 'address' => '', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Mapakanda South'],
            ['ref_no' => 'HH-2-1-57-02-135-00315', 'name' => 'ABDHUL SAMADU MOHOMED ASMI', 'address' => '26/1 MAPAKANDA SOUTH', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Mapakanda South'],
            ['ref_no' => 'HH-2-1-57-02-135-00320', 'name' => 'WICKRAMAGEDARA CHINTHAKA LAXAN JAYASENA', 'address' => 'NO 81 MAPAKANDA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Mapakanda South'],
            ['ref_no' => 'HH-2-1-57-02-135-00323', 'name' => 'WICKRAMAGEDARA CHINTHAKA LAXAN JAYASENA', 'address' => 'NO 81 MAPAKANDA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Mapakanda South'],



            // Weligodawatta - 25 Records
            ['ref_no' => 'HH-2-1-57-01-015-00442', 'name' => 'ANTHONY DOSAN FILISYA', 'address' => '24 ෂෙම්රොක් නාවලපිටිය', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Weligodawatta'],
            ['ref_no' => 'HH-2-1-57-01-015-00445', 'name' => 'JOSEPH ANDREW', 'address' => '629/7 WELIGODAWATHTHA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Weligodawatta'],
            ['ref_no' => 'HH-2-1-57-01-015-00511', 'name' => 'KONARA GEDARA JENNONA', 'address' => '92 WERALUGASHINNA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Weligodawatta'],
            ['ref_no' => 'HH-2-1-57-01-015-00512', 'name' => 'DISSANAYAKA MUDIYANSELAGE BALA MANIKA', 'address' => '08 SHEMROK NAWALAPITIYA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Weligodawatta'],
            ['ref_no' => 'HH-2-1-57-01-015-00513', 'name' => 'WIJESINGHA MUDIYANSELAGE YASAWATHEE', 'address' => '82 SHEMROK NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Weligodawatta'],
            ['ref_no' => 'HH-2-1-57-01-015-00514', 'name' => 'AMBAGAHA KUMBURE GEDARA KARUNAWATHEE', 'address' => 'ELDER HOUSE SEMROK NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Weligodawatta'],
            ['ref_no' => 'HH-2-1-57-01-015-00515', 'name' => 'SMARAKOON MUDIYANSELAGE TIKIRI BANDA', 'address' => 'SEMROK NAWALAPITIYA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Weligodawatta'],
            ['ref_no' => 'HH-2-1-57-01-015-00516', 'name' => 'KANDAIYA WADUAMMA', 'address' => 'SHEMROK NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Weligodawatta'],
            ['ref_no' => 'HH-2-1-57-01-015-00517', 'name' => 'SAMARAKOON GAMAGE WIJEDASA', 'address' => 'ELDER HOUSE SHEMROK NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Weligodawatta'],
            ['ref_no' => 'HH-2-1-57-01-015-00518', 'name' => 'BISSO MANIKE WIJEKOON', 'address' => 'ELDER HOUSE SHEMROK NAWALAPITIYA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Weligodawatta'],
            ['ref_no' => 'HH-2-1-57-01-015-00519', 'name' => 'MANNA DEWAGE SEELAWATHEE', 'address' => 'ELDER HOUSE SHEMROCK NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Weligodawatta'],
            ['ref_no' => 'HH-2-1-57-01-015-00520', 'name' => 'GARUMUNI ARACHCHILAGE KAMALAWATHEE', 'address' => '1029/2 SUHADA MAWATHA WERAUGASHINNA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Weligodawatta'],
            ['ref_no' => 'HH-2-1-57-01-015-00521', 'name' => 'PERIYASAMI CHANDRAN', 'address' => 'BA/75 WALIGODAWATHTHA NAWALAPITIYA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Weligodawatta'],
            ['ref_no' => 'HH-2-1-57-01-015-00522', 'name' => 'WEERASINGHA ARCHCHILAGE DON PREMAWATHEE', 'address' => 'KATUKITHULA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Weligodawatta'],
            ['ref_no' => 'HH-2-1-57-01-015-00523', 'name' => 'BENTHOTA HEWAGE LALITHA PREMASHELI', 'address' => '704/2 SHEMROCK NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Weligodawatta'],

            // Application Processing (5)
            ['ref_no' => 'HH-2-1-57-01-015-00511', 'name' => 'KONARA GEDARA JENNONA', 'address' => '92 WERALUGASHINNA NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Weligodawatta'],
            ['ref_no' => 'HH-2-1-57-01-015-00512', 'name' => 'DISSANAYAKA MUDIYANSELAGE BALA MANIKA', 'address' => '08 SHEMROK NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Weligodawatta'],
            ['ref_no' => 'HH-2-1-57-01-015-00513', 'name' => 'WIJESINGHA MUDIYANSELAGE YASAWATHEE', 'address' => '82 SHEMROK NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Weligodawatta'],
            ['ref_no' => 'HH-2-1-57-01-015-00514', 'name' => 'AMBAGAHA KUMBURE GEDARA KARUNAWATHEE', 'address' => 'ELDER HOUSE SEMROK NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Weligodawatta'],
            ['ref_no' => 'HH-2-1-57-01-015-00515', 'name' => 'SMARAKOON MUDIYANSELAGE TIKIRI BANDA', 'address' => 'SEMROK NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Weligodawatta'],

            // Not Eligible (5)
            ['ref_no' => 'HH-2-1-57-01-015-00501', 'name' => 'DISANAYAKE MUDIYANSELAGE ANULAWATHI', 'address' => 'WERALUGASHINNA NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Weligodawatta'],
            ['ref_no' => 'HH-2-1-57-01-015-00439', 'name' => 'JAYAKODI PIYANAGE SRIYANI JAYAKODI', 'address' => '117, SHEMROCK, NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Weligodawatta'],
            ['ref_no' => 'HH-2-1-57-01-015-00440', 'name' => 'BOMIRIYAGE DON SHANIKA RATHNASIRI', 'address' => 'NO.90 SHEMROCK NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Weligodawatta'],
            ['ref_no' => 'HH-2-1-57-01-015-00441', 'name' => 'RAGAGE DARMIKA RANATUNGA', 'address' => '28 /2 වෙරළුගස්හින්න', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Weligodawatta'],
            ['ref_no' => 'HH-2-1-57-01-015-00443', 'name' => 'MADAPATHAGE DON PREMARATHNEHANSI', 'address' => 'HANSI NIWASA SHEMROCK NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Weligodawatta'],



            // Dandubadiruppa - 25 Records
            ['ref_no' => 'HH-2-1-57-01-020-00772', 'name' => 'MADAPATHAGE DON CHANDRA PREMASEELI', 'address' => 'NO 36 GONAWALAPATHANA NAWALAPITIYA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Dandubadiruppa'],
            ['ref_no' => 'HH-2-1-57-01-020-00781', 'name' => 'BOMIRIYAGE DON NIMESHA MADUSHANI RATHNASIRI', 'address' => 'C,51 GONAWALAPATHANA NAWALAPITIYA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Dandubadiruppa'],
            ['ref_no' => 'HH-2-1-57-01-020-00787', 'name' => 'RAMAJAYAM MAITHILI', 'address' => 'SOLAKANDA NEW VILLAGE GONAWALAPATHANA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Dandubadiruppa'],
            ['ref_no' => 'HH-2-1-57-01-020-00834', 'name' => 'WEERAPODI GEDARA SIRIYAWATHI', 'address' => 'JANAUDANA GAMMANAYA, II MONTICRISTO WATTA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Dandubadiruppa'],
            ['ref_no' => 'HH-2-1-57-01-020-00989', 'name' => 'MARUDEI MUNIAMMA', 'address' => '24/1 MONTICRISTO ESTATE NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Dandubadiruppa'],
            ['ref_no' => 'HH-2-1-57-01-020-00990', 'name' => 'HEENKENDA MUDIYANSELAGE PUNCHI MANIKE', 'address' => 'NO 57 - KALUGALHINNA GONAWALAPATHANA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Dandubadiruppa'],
            ['ref_no' => 'HH-2-1-57-01-020-00991', 'name' => 'BINGE UDAGEDARA ENCE', 'address' => 'MONTICRISTO GONAWALAPATHANA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Dandubadiruppa'],
            ['ref_no' => 'HH-2-1-57-01-020-00992', 'name' => 'WALIGAMAGE SELAWATHI', 'address' => '1007 PUSSEMANKADA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Dandubadiruppa'],
            ['ref_no' => 'HH-2-1-57-01-020-00993', 'name' => 'KOONGAHA HENE GEDARA PIYASELI', 'address' => 'NO 31 GONAWALAPATHANA NAWALAPITIYA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Dandubadiruppa'],
            ['ref_no' => 'HH-2-1-57-01-020-00994', 'name' => 'WEERASEKARA MUDIYANSELAGE AMARADASA', 'address' => '15C GONAWALAPATHANA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Dandubadiruppa'],
            ['ref_no' => 'HH-2-1-57-01-020-00995', 'name' => 'SAMARAKOON MUDIYANSELAGE DAYAWATHI', 'address' => '789 PUSSEMANKADA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Dandubadiruppa'],
            ['ref_no' => 'HH-2-1-57-01-020-00996', 'name' => 'KATUWAWALA GAMAGE CHANDRAWATHI', 'address' => 'GALABODA DIVISION MONTICRISTO ESTATE', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Dandubadiruppa'],
            ['ref_no' => 'HH-2-1-57-01-020-00997', 'name' => 'WIJESINGHE ARACHCHILAGE PUNCHIMANIKE SUMANAWATHI', 'address' => '31/14 GONAWALAPATHANA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Dandubadiruppa'],
            ['ref_no' => 'HH-2-1-57-01-020-00998', 'name' => 'PERIYASAMI MARIYAI', 'address' => 'MONTICRISTO WATHTHA SOLANKANDA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Dandubadiruppa'],
            ['ref_no' => 'HH-2-1-57-01-020-00999', 'name' => 'NAGALETCHAMI RAMAIAH', 'address' => 'MONTERCRISTO NAWALAPITIYA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Dandubadiruppa'],

            // Application Processing (5)
            ['ref_no' => 'HH-2-1-57-01-020-00989', 'name' => 'MARUDEI MUNIAMMA', 'address' => '24/1 MONTICRISTO ESTATE NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Dandubadiruppa'],
            ['ref_no' => 'HH-2-1-57-01-020-00990', 'name' => 'HEENKENDA MUDIYANSELAGE PUNCHI MANIKE', 'address' => 'NO 57 - KALUGALHINNA GONAWALAPATHANA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Dandubadiruppa'],
            ['ref_no' => 'HH-2-1-57-01-020-00991', 'name' => 'BINGE UDAGEDARA ENCE', 'address' => 'MONTICRISTO GONAWALAPATHANA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Dandubadiruppa'],
            ['ref_no' => 'HH-2-1-57-01-020-00992', 'name' => 'WALIGAMAGE SELAWATHI', 'address' => '1007 PUSSEMANKADA NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Dandubadiruppa'],
            ['ref_no' => 'HH-2-1-57-01-020-00993', 'name' => 'KOONGAHA HENE GEDARA PIYASELI', 'address' => 'NO 31 GONAWALAPATHANA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Dandubadiruppa'],

            // Not Eligible (5)
            ['ref_no' => 'HH-2-1-57-01-020-01000', 'name' => 'KANAPATHI KITNAMMA', 'address' => 'SOLANKANDA MONTERCRISTO NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Dandubadiruppa'],
            ['ref_no' => 'HH-2-1-57-01-020-01002', 'name' => 'GG UKKU AMMA', 'address' => 'MOTERCRISTO ESTATE GALABODA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Dandubadiruppa'],
            ['ref_no' => 'HH-2-1-57-01-020-01003', 'name' => 'DASANAYAKAGE NILUKA DILRUKSHI PERERA', 'address' => 'KALUGALHINNA, GONAWALAPATHANA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Dandubadiruppa'],
            ['ref_no' => 'HH-2-1-57-01-020-01004', 'name' => 'ROSMERY JHONE', 'address' => 'SOLAN KANDA KADAWEEDIYA UDAHENTHANNA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Dandubadiruppa'],
            ['ref_no' => 'HH-2-1-57-01-020-01005', 'name' => 'CHANDRAWALLI ARUNASALAM', 'address' => 'SOLANKANDA NAWA GAMMANAYA GONAWALAPATHANA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Dandubadiruppa'],



            // Warakawa - 25 Records
            ['ref_no' => 'HH-2-1-57-01-010-00315', 'name' => 'MALIMBADA MARATHUDUWAGA DINUSHA MADUSHANI', 'address' => 'HALKADA WATHTHA, PALLEGAMA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Warakawa'],
            ['ref_no' => 'HH-2-1-57-01-010-00319', 'name' => 'DASANAYAKA APPUHAMILAGE BADDRA DAMAYANTHI', 'address' => '244, PASAL MAWATHA, PATHTHUNUPITIYA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Warakawa'],
            ['ref_no' => 'HH-2-1-57-01-010-00323', 'name' => 'MAHESHA SUBASHINI GAMAGE', 'address' => 'SAMANPAYA, KAHAMANA, NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Warakawa'],
            ['ref_no' => 'HH-2-1-57-01-010-00324', 'name' => 'SHANMUGANADAN VISWANADAN', 'address' => 'ROCKHILL, PATHTHUNUPITIYA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Warakawa'],
            ['ref_no' => 'HH-2-1-57-01-010-00327', 'name' => 'SAMARAKOON MUDIYANSELAGE PATHMA SAMARAKOON', 'address' => '225/1, PATHTHUNUPITIYA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Warakawa'],
            ['ref_no' => 'HH-2-1-57-01-010-00328', 'name' => 'KANAPATHI MAGESWARY', 'address' => '145/21, GAMPOLA ROAD', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Warakawa'],
            ['ref_no' => 'HH-2-1-57-01-010-00329', 'name' => 'SUNDARA KAPUGEDARA ARIYAWATHIE', 'address' => '281/1/A, GONDENNAWA WATHTHA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Warakawa'],
            ['ref_no' => 'HH-2-1-57-01-010-00378', 'name' => 'ROBERT DISSANAYAKA MUNIDASA', 'address' => 'KUMBURE GEDARA WARAKAWA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Warakawa'],
            ['ref_no' => 'HH-2-1-57-01-010-00379', 'name' => 'WIJETHUNGA MUDIYANSELAGE MALANI MANIKE', 'address' => '141/12 GAMPOLA ROAD NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Warakawa'],
            ['ref_no' => 'HH-2-1-57-01-010-00380', 'name' => 'AKMEEMANA VITHANAGE CHANDRAWATHEE', 'address' => '192 PATHTHUNUPITIYA NAWALAPITIYA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Warakawa'],
            ['ref_no' => 'HH-2-1-57-01-010-00381', 'name' => 'UDUWETH GAMARALALAGE HAMI MAHATHTHAYA', 'address' => '87 ALUGOLLA WATHTHA WARAKAWA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Warakawa'],
            ['ref_no' => 'HH-2-1-57-01-010-00382', 'name' => 'HAWPAMANAGE ALAN NONA', 'address' => '146/36 GAMPOLA ROAD NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Warakawa'],
            ['ref_no' => 'HH-2-1-57-01-010-00383', 'name' => 'AMBAGAHA KUMBURE GEDARA LAISAHAMI', 'address' => '02 SHEMROK JANAPADAYA NAWALAPITIYA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Warakawa'],
            ['ref_no' => 'HH-2-1-57-01-010-00384', 'name' => 'KURUNDU PATABANDIGE MANEL JAYASEKARA', 'address' => 'PATHTHUNUPITIYA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Warakawa'],
            ['ref_no' => 'HH-2-1-57-01-010-00385', 'name' => 'PADMA KUMARI SMARAKOON', 'address' => '224 PATHTHUNUPITIYA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Warakawa'],

            // Application Processing (5)
            ['ref_no' => 'HH-2-1-57-01-010-00378', 'name' => 'ROBERT DISSANAYAKA MUNIDASA', 'address' => 'KUMBURE GEDARA WARAKAWA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Warakawa'],
            ['ref_no' => 'HH-2-1-57-01-010-00379', 'name' => 'WIJETHUNGA MUDIYANSELAGE MALANI MANIKE', 'address' => '141/12 GAMPOLA ROAD', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Warakawa'],
            ['ref_no' => 'HH-2-1-57-01-010-00380', 'name' => 'AKMEEMANA VITHANAGE CHANDRAWATHEE', 'address' => '192 PATHTHUNUPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Warakawa'],
            ['ref_no' => 'HH-2-1-57-01-010-00381', 'name' => 'UDUWETH GAMARALALAGE HAMI MAHATHTHAYA', 'address' => '87 ALUGOLLA WATHTHA WARAKAWA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Warakawa'],
            ['ref_no' => 'HH-2-1-57-01-010-00382', 'name' => 'HAWPAMANAGE ALAN NONA', 'address' => '146/36 GAMPOLA ROAD', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Warakawa'],

            // Not Eligible (5)
            ['ref_no' => 'HH-2-1-57-01-010-00314', 'name' => 'DIYANWELA MADAGODA DAMMIKA PADMINI', 'address' => 'NO.04,ANDANGODA ESTATE ROAD', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Warakawa'],
            ['ref_no' => 'HH-2-1-57-01-010-00316', 'name' => 'RAJAPAKSHA MUDIYANSELAGE SAMPATH BANDARA RAJAPAKSHA', 'address' => 'KALYANI NIWASA , WARAKAWA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Warakawa'],
            ['ref_no' => 'HH-2-1-57-01-010-00318', 'name' => 'LANSAKARA HERATH MUDIYANSELAGE DILRUK NUWANGA BANDARA', 'address' => 'ROCKHILL WATHTHA, PATHTHUNUPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Warakawa'],
            ['ref_no' => 'HH-2-1-57-01-010-00320', 'name' => 'ERIYAGAMA GEDARA DINUSHA PRASANGI SOMASIRI', 'address' => '235, SCHOOL LANE, PATHTHUNUPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Warakawa'],
            ['ref_no' => 'HH-2-1-57-01-010-00321', 'name' => 'SAMARATHUNGA MUDIYANSELAGE JAYARATHNA SAMARATHUNGA', 'address' => 'JAYANANDA NIWASA, NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Warakawa'],



            // Panithuduwa - 25 Records
            ['ref_no' => 'HH-2-1-57-02-025-00313', 'name' => 'SIVASANGU LALITHAMBIGEI', 'address' => '27 පැණිතුඩුමුල්ල මීපිටිය නාවලපිටිය', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Panithuduwa'],
            ['ref_no' => 'HH-2-1-57-02-025-00316', 'name' => 'LOKUPITIYAGE GAMINI WEERASINGHE PERERA', 'address' => 'NO. 82/4 MEEPITIYA, NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Panithuduwa'],
            ['ref_no' => 'HH-2-1-57-02-025-00320', 'name' => 'LOKUPITIYAGE PRIYA NILANTHI PERERA', 'address' => 'NO82/4/A,MEEPITIYA,NAWALAPIYIYA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Panithuduwa'],
            ['ref_no' => 'HH-2-1-57-02-025-00322', 'name' => 'GALAPATHA MUDALIGE DEEPANI SAMANLATHA', 'address' => 'NO138, MEEPITIYA, NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Panithuduwa'],
            ['ref_no' => 'HH-2-1-57-02-025-00323', 'name' => 'KEHELWATHTHE GEDARA DILANI ROOPIKA WIJESINGHE', 'address' => 'NO174/2, KOPIYAWATHTHAMULLA COLANY', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Panithuduwa'],
            ['ref_no' => 'HH-2-1-57-02-025-00367', 'name' => 'KARAHADUNGALA OWITE GEDARA SOMATHILAKA', 'address' => '27 MEEPITIYA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Panithuduwa'],
            ['ref_no' => 'HH-2-1-57-02-025-00368', 'name' => 'JANAKI RAJA', 'address' => 'PANITHUDUMULLA ,NAWALAPITIYA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Panithuduwa'],
            ['ref_no' => 'HH-2-1-57-02-025-00369', 'name' => 'SUPPIYA SATHIYA', 'address' => '160/15/01,HADUNGALA WATHTHA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Panithuduwa'],
            ['ref_no' => 'HH-2-1-57-02-025-00371', 'name' => 'WHALKADA GEDARA MALNI JAWARDHANA', 'address' => '210 BOPITIYA MEEPITIYA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Panithuduwa'],
            ['ref_no' => 'HH-2-1-57-01-080-00321', 'name' => 'THANGAWELU VELUMAILU', 'address' => '1381B, MEEPITIYA, NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Panithuduwa'],
            ['ref_no' => 'HH-2-1-57-02-025-00312', 'name' => 'MUTHAIAH AMIRTHARATNAM', 'address' => 'NO 196, KATHIRLAND, MEEPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Panithuduwa'],
            ['ref_no' => 'HH-2-1-57-02-025-00315', 'name' => 'SUBOGANGA VAGEESWARAN', 'address' => 'NO 76/1, PANIDHUDUWA, AMBAGAMUWA ROAD', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Panithuduwa'],
            ['ref_no' => 'HH-2-1-57-02-025-00321', 'name' => 'KOBOMALLE WIYANNALA GEDARA PIYAL DAYANANDA', 'address' => 'NO.177, KOPIYAWATHTHAMULLA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Panithuduwa'],
            ['ref_no' => 'HH-2-1-57-02-025-00327', 'name' => 'RANASINGHE MUDIYANSELAGE NIROSHA MADUWANTHI', 'address' => '153/3/2, MEEPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Panithuduwa'],
            ['ref_no' => 'HH-2-1-57-02-025-00342', 'name' => 'KARAHADUNGALA OVITE GEDARA DAMMIKA', 'address' => '27/E, MEEPITIYA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Panithuduwa'],

            // Application Processing (5)
            ['ref_no' => 'HH-2-1-57-02-025-00367', 'name' => 'KARAHADUNGALA OWITE GEDARA SOMATHILAKA', 'address' => '27 MEEPITIYA NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Panithuduwa'],
            ['ref_no' => 'HH-2-1-57-02-025-00368', 'name' => 'JANAKI RAJA', 'address' => 'PANITHUDUMULLA ,NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Panithuduwa'],
            ['ref_no' => 'HH-2-1-57-02-025-00369', 'name' => 'SUPPIYA SATHIYA', 'address' => '160/15/01,HADUNGALA WATHTHA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Panithuduwa'],
            ['ref_no' => 'HH-2-1-57-02-025-00371', 'name' => 'WHALKADA GEDARA MALNI JAWARDHANA', 'address' => '210 BOPITIYA MEEPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Panithuduwa'],
            ['ref_no' => 'HH-2-1-57-01-080-00321', 'name' => 'THANGAWELU VELUMAILU', 'address' => '1381B, MEEPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Panithuduwa'],

            // Not Eligible (5)
            ['ref_no' => 'HH-2-1-57-02-025-00314', 'name' => 'GONNANA GAMARALALAGE NIMALKA SAMNMALI GUNASEKARA', 'address' => 'නො 53 මීපිටිය නාවලපිටිය', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Panithuduwa'],
            ['ref_no' => 'HH-2-1-57-02-025-00317', 'name' => 'RAJALINGAM SAILAJA', 'address' => '156/10 ,ST PATRICT LANE', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Panithuduwa'],
            ['ref_no' => 'HH-2-1-57-02-025-00318', 'name' => 'SAMARAKOON MUDIYANSELAGE SWARNA MALKANTHI', 'address' => '99/6, PENITHUDUWA WATTA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Panithuduwa'],
            ['ref_no' => 'HH-2-1-57-02-025-00319', 'name' => 'ALAGAN MURUGAN', 'address' => 'LAXME ESTATE MEEPITIYA NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Panithuduwa'],
            ['ref_no' => 'HH-2-1-57-02-025-00344', 'name' => 'SUBASINGHE ARATCHILAGE NUWAN PRADEEP KUMARA', 'address' => '189/E/3 KOPIYAWATTA MULLA JANAPADAYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Panithuduwa'],




            // Karahadungala - 25 Records
            ['ref_no' => 'HH-2-1-57-02-050-00362', 'name' => 'RAMASAMY THIRUGANAM', 'address' => '20/B2 JEYASUNDARA MAWATTA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Karahadungala'],
            ['ref_no' => 'HH-2-1-57-02-050-00369', 'name' => 'ABDUL HAMED MOHIDEEN ABDUL CADER', 'address' => '19/2/A JAYASUNDARA MAWATHA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Karahadungala'],
            ['ref_no' => 'HH-2-1-57-02-050-00370', 'name' => 'MOHAMED JAWFAR RABIYATHIL JUMRA', 'address' => '18/5/1 JAYASUNDARA LANE', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Karahadungala'],
            ['ref_no' => 'HH-2-1-57-02-050-00371', 'name' => 'PAKYANATHAN SHANTHY', 'address' => 'NO 199/B, DAWNER WATTA HULANHINNA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Karahadungala'],
            ['ref_no' => 'HH-2-1-57-02-050-00374', 'name' => 'PAHALA WITHANALAGE KUSUM KUMARY JAYATHISSA', 'address' => '134, MEEPITIYA, NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Karahadungala'],
            ['ref_no' => 'HH-2-1-57-02-050-00375', 'name' => 'MANIKKAM PAKKIYANATHAN', 'address' => 'NO 16/A,JAYASUNDARA LANE', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Karahadungala'],
            ['ref_no' => 'HH-2-1-57-02-050-00442', 'name' => 'PAUL JERALD PETERS', 'address' => 'T.PATRICKS LAND MEEPITIYA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Karahadungala'],
            ['ref_no' => 'HH-2-1-57-02-050-00443', 'name' => 'POLKATIYAGE GUNAPALA', 'address' => 'NO 46 MEEPITIYA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Karahadungala'],
            ['ref_no' => 'HH-2-1-57-02-050-00444', 'name' => 'USMAN SALI MOHOMED MERLIYA HATHOON', 'address' => '5 A 2 OVITA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Karahadungala'],
            ['ref_no' => 'HH-2-1-57-02-050-00445', 'name' => 'ABDUL KADAR JEMILA UMMA', 'address' => 'NO 13/1 JAYASUNDARA LANE NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Karahadungala'],
            ['ref_no' => 'HH-2-1-57-02-050-00446', 'name' => 'PASEERA MUHAMMADU MOHAIDEEN', 'address' => '26/1B JAYASUNDARA LANE NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Karahadungala'],
            ['ref_no' => 'HH-2-1-57-02-050-00447', 'name' => 'SITHTHI MAZAHIRA ABUBAKKAR', 'address' => '55 OVITA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Karahadungala'],
            ['ref_no' => 'HH-2-1-57-02-050-00448', 'name' => 'JAROOK SAMSUDEEN', 'address' => '33 MEEPITIYA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Karahadungala'],
            ['ref_no' => 'HH-2-1-57-02-050-00449', 'name' => 'ABDUL ASEES SITHTHI UMMA', 'address' => 'NO 30 JAYASUNDARA MAWATHA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Karahadungala'],
            ['ref_no' => 'HH-2-1-57-02-050-00450', 'name' => 'PAKEER MOHIDEEN SITHTHI FAREEDA', 'address' => '16/A ,JAYASUNDARA LANE', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Karahadungala'],

            // Application Processing (5)
            ['ref_no' => 'HH-2-1-57-02-050-00442', 'name' => 'PAUL JERALD PETERS', 'address' => 'T.PATRICKS LAND MEEPITIYA NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Karahadungala'],
            ['ref_no' => 'HH-2-1-57-02-050-00443', 'name' => 'POLKATIYAGE GUNAPALA', 'address' => 'NO 46 MEEPITIYA NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Karahadungala'],
            ['ref_no' => 'HH-2-1-57-02-050-00444', 'name' => 'USMAN SALI MOHOMED MERLIYA HATHOON', 'address' => '5 A 2 OVITA NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Karahadungala'],
            ['ref_no' => 'HH-2-1-57-02-050-00445', 'name' => 'ABDUL KADAR JEMILA UMMA', 'address' => 'NO 13/1 JAYASUNDARA LANE', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Karahadungala'],
            ['ref_no' => 'HH-2-1-57-02-050-00446', 'name' => 'PASEERA MUHAMMADU MOHAIDEEN', 'address' => '26/1B JAYASUNDARA LANE', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Karahadungala'],

            // Not Eligible (5)
            ['ref_no' => 'HH-2-1-57-02-050-00363', 'name' => 'ABDUL MAJEED MOHAMED ZAKARIYA', 'address' => '21/Aජයසුන්දරමාවත', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Karahadungala'],
            ['ref_no' => 'HH-2-1-57-02-050-00364', 'name' => 'MOHAMED MUTHALIF MOHAMED RIYAS', 'address' => '6/F OVITTA NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Karahadungala'],
            ['ref_no' => 'HH-2-1-57-02-050-00365', 'name' => 'IYAZDEEN RASSHAN', 'address' => 'නො.43 ඕවිට නාවලපිටිය', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Karahadungala'],
            ['ref_no' => 'HH-2-1-57-02-050-00366', 'name' => 'SAYYADU AHAMMADU BUHARI JOHARAUMMA', 'address' => '21/1JAYASUNDARALANE', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Karahadungala'],
            ['ref_no' => 'HH-2-1-57-02-050-00367', 'name' => 'SELVANAYAGAM ARUL HARINTON', 'address' => '07 UPALI MAWATHA, MEEPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Karahadungala'],



            // Pallegama - 25 Records (15 Eligible, 5 Processing, 5 Not Eligible)
            ['ref_no' => 'HH-2-1-57-01-005-00396', 'name' => 'ERIYAGAMA GEDARA PIYADASA', 'address' => '13 PALLEGAMA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Pallegama'],
            ['ref_no' => 'HH-2-1-57-01-005-00398', 'name' => 'SRI PARACKRAMA SIGAMINI MUHANDIRAMLAGE MAHENDRASINGHA', 'address' => '115 PALLEGAMA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Pallegama'],
            ['ref_no' => 'HH-2-1-57-01-005-00399', 'name' => 'MAKEVITA ROHINI PERERA', 'address' => 'NO 120 PALLEGAMA NAWALAPITIYA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Pallegama'],
            ['ref_no' => 'HH-2-1-57-01-005-00400', 'name' => 'MIGEL PERERA MAHAVIDANAGE SOMADASA', 'address' => 'NO 1 NATIONAL HOUSE TILTON PALLEGAMA,NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Pallegama'],
            ['ref_no' => 'HH-2-1-57-01-005-00401', 'name' => 'SAMARATHUNGA LIYANA MOHOTTIGE SIRISENA', 'address' => '157/A ,PASBAGE PALLEGAMA NAWALAPITIYA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Pallegama'],
            ['ref_no' => 'HH-2-1-57-01-005-00351', 'name' => 'SAMALI ARACHCHIGE SHIROMI CHAMPIKA', 'address' => '66, PALLEGAMA, NAWALAPITIYA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Pallegama'],
            ['ref_no' => 'HH-2-1-57-01-005-00362', 'name' => 'KARUNAPEDI GEDARA MISIYA', 'address' => '34 TILTON , PALLEGAMA NAWALAPITIYA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Pallegama'],
            ['ref_no' => 'HH-2-1-57-01-005-00366', 'name' => 'RATHNAYAKA MUDIYANSELAGE GUNARATHNA', 'address' => 'DANGAHA HINNA PALLEGAMA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Pallegama'],
            ['ref_no' => 'HH-2-1-57-01-005-00367', 'name' => 'DIYAGU HANDIGE VINI SARATH GUNAWARDANA', 'address' => 'NO 02 PALLEGAMA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Pallegama'],
            ['ref_no' => 'HH-2-1-57-01-005-00368', 'name' => 'MAGAMMANA YADDIGEDARA CHATHURANI LASANTHIKA', 'address' => '58 PALLEGAMA NAWALAPITIYA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Pallegama'],
            ['ref_no' => 'HH-2-1-57-01-005-00369', 'name' => 'EXAMPLE FAMILY ONE', 'address' => '100 PALLEGAMA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Pallegama'],
            ['ref_no' => 'HH-2-1-57-01-005-00370', 'name' => 'EXAMPLE FAMILY TWO', 'address' => '105 PALLEGAMA NAWALAPITIYA', 'category' => 'Severely Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Pallegama'],
            ['ref_no' => 'HH-2-1-57-01-005-00371', 'name' => 'EXAMPLE FAMILY THREE', 'address' => '110 PALLEGAMA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Pallegama'],
            ['ref_no' => 'HH-2-1-57-01-005-00372', 'name' => 'EXAMPLE FAMILY FOUR', 'address' => '115 PALLEGAMA NAWALAPITIYA', 'category' => 'Vulnerable', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Pallegama'],
            ['ref_no' => 'HH-2-1-57-01-005-00373', 'name' => 'EXAMPLE FAMILY FIVE', 'address' => '120 PALLEGAMA NAWALAPITIYA', 'category' => 'Poor', 'aswesuma_eligible' => 'Eligible', 'gn_division' => 'Pallegama'],

            // Application Processing (5)
            ['ref_no' => 'HH-2-1-57-01-005-00374', 'name' => 'PROCESSING FAMILY ONE', 'address' => '125 PALLEGAMA NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Pallegama'],
            ['ref_no' => 'HH-2-1-57-01-005-00375', 'name' => 'PROCESSING FAMILY TWO', 'address' => '130 PALLEGAMA NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Pallegama'],
            ['ref_no' => 'HH-2-1-57-01-005-00376', 'name' => 'PROCESSING FAMILY THREE', 'address' => '135 PALLEGAMA NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Pallegama'],
            ['ref_no' => 'HH-2-1-57-01-005-00377', 'name' => 'PROCESSING FAMILY FOUR', 'address' => '140 PALLEGAMA NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Pallegama'],
            ['ref_no' => 'HH-2-1-57-01-005-00378', 'name' => 'PROCESSING FAMILY FIVE', 'address' => '145 PALLEGAMA NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Application Processing', 'gn_division' => 'Pallegama'],

            // Not Eligible (5)
            ['ref_no' => 'HH-2-1-57-01-005-00379', 'name' => 'NOT ELIGIBLE FAMILY ONE', 'address' => '150 PALLEGAMA NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Pallegama'],
            ['ref_no' => 'HH-2-1-57-01-005-00380', 'name' => 'NOT ELIGIBLE FAMILY TWO', 'address' => '155 PALLEGAMA NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Pallegama'],
            ['ref_no' => 'HH-2-1-57-01-005-00381', 'name' => 'NOT ELIGIBLE FAMILY THREE', 'address' => '160 PALLEGAMA NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Pallegama'],
            ['ref_no' => 'HH-2-1-57-01-005-00382', 'name' => 'NOT ELIGIBLE FAMILY FOUR', 'address' => '165 PALLEGAMA NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Pallegama'],
            ['ref_no' => 'HH-2-1-57-01-005-00383', 'name' => 'NOT ELIGIBLE FAMILY FIVE', 'address' => '170 PALLEGAMA NAWALAPITIYA', 'category' => '--', 'aswesuma_eligible' => 'Not Eligible', 'gn_division' => 'Pallegama'],

        ];


        foreach ($families as $family) {
            DB::table('eligible_families')->updateOrInsert(
                ['ref_no' => $family['ref_no']],
                $family
            );
        }


        $now = now();

        collect($families)
            ->map(function (array $family) use ($now) {
                $family['created_at'] = $now;
                $family['updated_at'] = $now;
                return $family;
            })
            ->chunk(500)
            ->each(function ($chunk) {
                DB::table('eligible_families')->insert($chunk->toArray());
            });
    }
}
