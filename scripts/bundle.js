(()=>{"use strict";const t=wp.hooks,a=lodash,Z=JSON.parse('{"name":"mask-example-1","label":"Mask Example: One","svgContent":{"regular":{"default":{"landscape":"<path d=\\"M1175.84,0H0V1440H1176.38c-110.64-207.53-174.88-454.91-174.88-720.5C1001.5,454.33,1065.54,207.33,1175.84,0Z\\"/>","portrait":"<path d=\\"M1175.43,0H0V2560H1176.38c-196.68-368.95-310.9-808.72-310.9-1280.89C865.48,807.7,979.33,368.58,1175.43,0Z\\"/>","square":"<path d=\\"M1175.66,0H0V1920H1176.38c-147.51-276.71-233.17-606.54-233.17-960.67C943.21,605.78,1028.59,276.44,1175.66,0Z\\"/>"},"rotated":{"landscape":"<path d=\\"M0,545.16V1440H1920V544.62C1643.29,655.26,1313.46,719.5,959.33,719.5,605.78,719.5,276.44,655.46,0,545.16Z\\"/>","portrait":"<path d=\\"M0,1048.43V2560H1920V1047.72c-276.71,147.51-606.54,233.17-960.67,233.17C605.78,1280.89,276.44,1195.51,0,1048.43Z\\"/>","square":"<path d=\\"M0,728.34V1920H1920V727.62c-276.71,147.51-606.54,233.17-960.67,233.17C605.78,960.79,276.44,875.41,0,728.34Z\\"/>"}},"inverted":{"default":{"landscape":"<path d=\\"M1920,0H1175.84c-110.3,207.33-174.34,454.33-174.34,719.5,0,265.59,64.24,513,174.88,720.5H1920Z\\"/>","portrait":"<path d=\\"M1175.43,0H1920V2560H1176.38c-196.68-368.95-310.9-808.72-310.9-1280.89C865.48,807.7,979.33,368.58,1175.43,0Z\\"/>","square":"<path d=\\"M1175.66,0H1920V1920H1176.38c-147.51-276.71-233.17-606.54-233.17-960.67C943.21,605.78,1028.59,276.44,1175.66,0Z\\"/>"},"rotated":{"landscape":"<path d=\\"M0,545.16V0H1920V544.62C1643.29,655.26,1313.46,719.5,959.33,719.5,605.78,719.5,276.44,655.46,0,545.16Z\\"/>","portrait":"<path d=\\"M0,1048.43V0H1920V1047.72c-276.71,147.51-606.54,233.17-960.67,233.17C605.78,1280.89,276.44,1195.51,0,1048.43Z\\"/>","square":"<path d=\\"M0,728.34V0H1920V727.62c-276.71,147.51-606.54,233.17-960.67,233.17C605.78,960.79,276.44,875.41,0,728.34Z\\"/>"}}},"priority":1}'),A=JSON.parse('{"name":"mask-example-2","label":"Mask Example: Two","svgContent":{"regular":{"default":{"landscape":"<path d=\\"M0,1440H1920V0H0ZM729.79,450c112.5,8.65,199.22-58.32,293-101.82,36.35-25.81,75.42-47.67,120.66-60.64,411.05-130.29,634.07,288.11,369.08,599.49-3.24,4.19-6.56,8.32-9.91,12.42-47.1,57.67-104.37,106.58-168.16,146.51-333,208.45-851,170.72-1006.95-133.47-18.53-36.13-20.8-89.14-3.36-140-10.74-23.07-22-46.55-26.65-72C253.28,457.35,515.27,433.55,729.79,450Z\\"/><path fill-opacity=\\".4\\" d=\\"M1178.93,307.43c-57.11.78-107.59,18.28-156.1,40.78,36.35-25.81,75.42-47.67,120.66-60.64,411.05-130.29,634.07,288.11,369.08,599.49-3.24,4.19-6.56,8.32-9.91,12.42C1683.16,653.44,1539.44,291.86,1178.93,307.43ZM324.19,772.53c-17.44,50.85-15.17,103.86,3.36,140,156,304.19,674,341.92,1007,133.47C1004.57,1239.39,478.65,1104.63,324.19,772.53Z\\"/>","portrait":"<path d=\\"M0,0V2560H1920V0ZM1512.57,1447.06c-3.24,4.19-6.56,8.32-9.91,12.42-47.1,57.67-104.37,106.58-168.16,146.51-333,208.45-851,170.72-1006.95-133.47-18.53-36.13-20.8-89.14-3.36-140-10.74-23.07-22-46.55-26.65-72-44.26-243.16,217.73-267,432.25-250.48,112.5,8.65,199.22-58.32,293-101.82,36.35-25.81,75.42-47.67,120.67-60.64C1554.54,717.28,1777.56,1135.68,1512.57,1447.06Z\\"/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<path fill-opacity=\\".4\\" d=\\"M1512.57,1447.06c-3.24,4.19-6.56,8.32-9.91,12.42,180.5-246,36.78-607.62-323.73-592.05-57.11.78-107.59,18.28-156.1,40.78,36.35-25.81,75.42-47.67,120.67-60.64C1554.54,717.28,1777.56,1135.68,1512.57,1447.06ZM324.19,1332.53c-17.44,50.85-15.17,103.86,3.36,140,156,304.19,674,341.92,1007,133.47C1004.57,1799.39,478.65,1664.63,324.19,1332.53Z\\"/>","square":"<path d=\\"M0,1920H1920V0H0ZM729.79,690c112.5,8.65,199.22-58.32,293-101.82,36.35-25.81,75.42-47.67,120.67-60.64,411-130.29,634.06,288.11,369.07,599.49-3.24,4.19-6.56,8.32-9.91,12.42-47.1,57.67-104.37,106.58-168.16,146.51-333,208.45-851,170.72-1006.95-133.47-18.53-36.13-20.8-89.14-3.36-140-10.74-23.07-22-46.55-26.65-72C253.28,697.35,515.27,673.55,729.79,690Z\\"/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<path fill-opacity=\\".4\\" d=\\"M1334.5,1286c-333,208.45-851,170.72-1006.95-133.47-18.53-36.13-20.8-89.14-3.36-140C478.65,1344.63,1004.57,1479.39,1334.5,1286Zm168.16-146.51c3.35-4.1,6.67-8.23,9.91-12.42,265-311.38,42-729.78-369.07-599.49-45.25,13-84.32,34.83-120.67,60.64,48.51-22.5,99-40,156.1-40.78C1539.44,531.86,1683.16,893.44,1502.66,1139.48Z\\"/>"},"rotated":{"landscape":"<path d=\\"M0,1440H1920V0H0ZM720.14,861.63c22.44-87.43-18.28-165.06-39.52-245-15.28-32.23-27.07-66-31-103.49-45.54-341.95,315.07-459.52,523.58-207.5,2.85,3.14,5.64,6.32,8.4,9.53,38.9,45.12,69.48,97,92.08,152.84,118,291.28,16.28,694.15-245.05,774.78-31,9.58-73.11,4-110.75-16.79-19.67,5.24-39.74,10.87-60.45,11C659.71,1238.06,677.35,1028.35,720.14,861.63Z\\"/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<path fill-opacity=\\".4\\" d=\\"M670.18,488c-7.32,45.11-.54,87.31,10.44,128.66-15.28-32.23-27.07-66-31-103.49-45.54-341.95,315.07-459.52,523.58-207.5,2.85,3.14,5.64,6.32,8.4,9.53C1012.83,138.78,708,201.78,670.18,488Zm247.69,738c37.64,20.8,79.72,26.37,110.75,16.79,261.33-80.63,363-483.5,245.05-774.78C1380.2,754.8,1201,1150.42,917.87,1226Z\\"/>","portrait":"<path d=\\"M0,0V2560H1920V0ZM1220.47,764.83c3.56,3.93,7,7.91,10.51,11.92,48.63,56.4,86.84,121.29,115.09,191,147.47,364.1,20.35,867.69-306.3,968.48-38.8,12-91.4,5-138.44-21-24.59,6.56-49.67,13.59-75.56,13.73-247.15,1.36-225.1-260.77-171.61-469.17,28.05-109.3-22.85-206.33-49.4-306.27-19.1-40.28-33.84-82.56-38.76-129.37C509.07,596.77,959.84,449.8,1220.47,764.83Z\\"/>\\n  \\t\\t\\t\\t\\t\\t\\t\\t\\t<path fill-opacity=\\".4\\" d=\\"M1220.47,764.83c3.56,3.93,7,7.91,10.51,11.92C1020,556.27,639,635,591.72,992.75c-9.15,56.38-.68,109.13,13,160.82-19.1-40.28-33.84-82.56-38.76-129.37C509.07,596.77,959.84,449.8,1220.47,764.83ZM901.33,1915.28c47,26,99.64,33,138.44,21,326.65-100.79,453.77-604.38,306.3-968.48C1479.24,1326.3,1255.2,1820.83,901.33,1915.28Z\\"/>","square":"<path d=\\"M0,1920H1920V0H0Zm654.16-780.16c28.05-109.3-22.85-206.33-49.4-306.28C585.66,793.29,570.92,751,566,704.2c-56.93-427.43,393.84-574.4,654.47-259.37,3.56,3.93,7,7.91,10.51,11.92,48.63,56.4,86.84,121.29,115.09,191,147.47,364.1,20.35,867.69-306.3,968.48-38.8,12-91.4,5-138.44-21-24.59,6.56-49.67,13.59-75.56,13.73C578.62,1610.37,600.67,1348.24,654.16,1139.84Z\\"/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<path fill-opacity=\\".4\\" d=\\"M1346.07,647.79c147.47,364.1,20.35,867.69-306.3,968.48-38.8,12-91.4,5-138.44-21C1255.2,1500.83,1479.24,1006.3,1346.07,647.79ZM1231,456.75c-3.46-4-7-8-10.51-11.92C959.84,129.8,509.07,276.77,566,704.2c4.92,46.81,19.66,89.09,38.76,129.36-13.72-51.68-22.19-104.43-13-160.81C639,315,1020,236.27,1231,456.75Z\\"/>"}},"inverted":{"default":{"landscape":"<path fill-opacity=\\".4\\" d=\\"M1178.93,307.43c-57.11.78-107.59,18.28-156.1,40.78,36.35-25.81,75.42-47.67,120.66-60.64,411.05-130.29,634.07,288.11,369.08,599.49-3.24,4.19-6.56,8.32-9.91,12.42C1683.16,653.44,1539.44,291.86,1178.93,307.43ZM324.19,772.53c-17.44,50.85-15.17,103.86,3.36,140,156,304.19,674,341.92,1007,133.47C1004.57,1239.39,478.65,1104.63,324.19,772.53Z\\"/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<path d=\\"M324.19,772.53c154.46,332.1,680.38,466.86,1010.31,273.46,63.79-39.93,121.06-88.84,168.16-146.51,180.5-246,36.78-607.62-323.73-592-57.11.78-107.59,18.28-156.1,40.78C929,391.71,842.29,458.68,729.79,450c-214.52-16.48-476.51,7.32-432.25,250.48C302.18,726,313.45,749.46,324.19,772.53Z\\"/>","portrait":"<path fill-opacity=\\".4\\" d=\\"M1512.57,1447.06c-3.24,4.19-6.56,8.32-9.91,12.42,180.5-246,36.78-607.62-323.73-592.05-57.11.78-107.59,18.28-156.1,40.78,36.35-25.81,75.42-47.67,120.67-60.64C1554.54,717.28,1777.56,1135.68,1512.57,1447.06ZM324.19,1332.53c-17.44,50.85-15.17,103.86,3.36,140,156,304.19,674,341.92,1007,133.47C1004.57,1799.39,478.65,1664.63,324.19,1332.53Z\\"/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<path d=\\"M1178.93,867.43c-57.11.78-107.59,18.28-156.1,40.78-93.82,43.5-180.54,110.47-293,101.82-214.52-16.48-476.51,7.32-432.25,250.48,4.64,25.47,15.91,49,26.65,72,154.46,332.1,680.38,466.86,1010.31,273.46,63.79-39.93,121.06-88.84,168.16-146.51C1683.16,1213.44,1539.44,851.86,1178.93,867.43Z\\"/>","square":"<path fill-opacity=\\".4\\" d=\\"M1334.5,1286c-333,208.45-851,170.72-1006.95-133.47-18.53-36.13-20.8-89.14-3.36-140C478.65,1344.63,1004.57,1479.39,1334.5,1286Zm168.16-146.51c3.35-4.1,6.67-8.23,9.91-12.42,265-311.38,42-729.78-369.07-599.49-45.25,13-84.32,34.83-120.67,60.64,48.51-22.5,99-40,156.1-40.78C1539.44,531.86,1683.16,893.44,1502.66,1139.48Z\\"/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<path d=\\"M324.19,1012.53c154.46,332.1,680.38,466.86,1010.31,273.46,63.79-39.93,121.06-88.84,168.16-146.51,180.5-246,36.78-607.62-323.73-592.05-57.11.78-107.59,18.28-156.1,40.78C929,631.71,842.29,698.68,729.79,690c-214.52-16.48-476.51,7.32-432.25,250.48C302.18,966,313.45,989.46,324.19,1012.53Z\\"/>"},"rotated":{"landscape":"<path fill-opacity=\\".4\\" d=\\"M670.18,488c-7.32,45.11-.54,87.31,10.44,128.66-15.28-32.23-27.07-66-31-103.49-45.54-341.95,315.07-459.52,523.58-207.5,2.85,3.14,5.64,6.32,8.4,9.53C1012.83,138.78,708,201.78,670.18,488Zm247.69,738c37.64,20.8,79.72,26.37,110.75,16.79,261.33-80.63,363-483.5,245.05-774.78C1380.2,754.8,1201,1150.42,917.87,1226Z\\"/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<path d=\\"M917.87,1226c283.1-75.57,462.33-471.19,355.8-758-22.6-55.8-53.18-107.72-92.08-152.84C1012.83,138.78,708,201.78,670.18,488c-7.32,45.11-.54,87.31,10.44,128.66,21.24,80,62,157.58,39.52,245-42.79,166.72-60.43,376.43,137.28,375.34C878.13,1236.86,898.2,1231.23,917.87,1226Z\\"/>","portrait":"<path fill-opacity=\\".4\\" d=\\"M1220.47,764.83c3.56,3.93,7,7.91,10.51,11.92C1020,556.27,639,635,591.72,992.75c-9.15,56.38-.68,109.13,13,160.82-19.1-40.28-33.84-82.56-38.76-129.37C509.07,596.77,959.84,449.8,1220.47,764.83ZM901.33,1915.28c47,26,99.64,33,138.44,21,326.65-100.79,453.77-604.38,306.3-968.48C1479.24,1326.3,1255.2,1820.83,901.33,1915.28Z\\"/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<path d=\\"M591.72,992.75c-9.15,56.38-.68,109.13,13,160.82,26.55,99.94,77.45,197,49.4,306.27-53.49,208.4-75.54,470.53,171.61,469.17,25.89-.14,51-7.17,75.56-13.73,353.87-94.45,577.91-589,444.74-947.49-28.25-69.75-66.46-134.64-115.09-191C1020,556.27,639,635,591.72,992.75Z\\"/>","square":"<path fill-opacity=\\".4\\" d=\\"M1346.07,647.79c147.47,364.1,20.35,867.69-306.3,968.48-38.8,12-91.4,5-138.44-21C1255.2,1500.83,1479.24,1006.3,1346.07,647.79ZM1231,456.75c-3.46-4-7-8-10.51-11.92C959.84,129.8,509.07,276.77,566,704.2c4.92,46.81,19.66,89.09,38.76,129.36-13.72-51.68-22.19-104.43-13-160.81C639,315,1020,236.27,1231,456.75Z\\"/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<path d=\\"M901.33,1595.28c353.87-94.45,577.91-589,444.74-947.49-28.25-69.75-66.46-134.64-115.09-191C1020,236.27,639,315,591.72,672.75c-9.15,56.38-.68,109.13,13,160.81,26.55,100,77.45,197,49.4,306.28-53.49,208.4-75.54,470.53,171.61,469.17C851.66,1608.87,876.74,1601.84,901.33,1595.28Z\\"/>"}}}}');var M,e=function(t){var Z;return(0,a.values)(null!==(Z=null==t?void 0:t.default)&&void 0!==Z?Z:t)}(((M={})[Z.name]=Z,M[A.name]=A,M));const p=JSON.parse('{"name":"pattern-example-1","label":"Pattern Example: One","svgContent":{"regular":{"default":"<path d=\\"M0,21.68a50,50,0,0,0,39.77,28A40.1,40.1,0,0,1,0,85.05V95a40.1,40.1,0,0,1,39.77,35.37A50,50,0,0,0,0,158.32V180H5a40.09,40.09,0,0,1,35.37-39.76,50.08,50.08,0,0,0,28,39.76h43.36a50.08,50.08,0,0,0,28-39.76A40.09,40.09,0,0,1,175.05,180H180V158.32a50,50,0,0,0-39.77-28A40.1,40.1,0,0,1,180,95v-9.9a40.1,40.1,0,0,1-39.77-35.37,50,50,0,0,0,39.77-28V0h-4.95a40.09,40.09,0,0,1-35.37,39.76A50.08,50.08,0,0,0,111.65,0H68.35a50.08,50.08,0,0,0-28,39.76A40.09,40.09,0,0,1,5,0H0ZM90,175.05a40.1,40.1,0,0,1-39.77-35.37,50,50,0,0,0,39.77-28,50,50,0,0,0,39.77,28A40.1,40.1,0,0,1,90,175.05ZM158.32,90a50.08,50.08,0,0,0-28,39.76,40,40,0,0,1,0-79.52A50.08,50.08,0,0,0,158.32,90ZM90,5a40.1,40.1,0,0,1,39.77,35.37A50,50,0,0,0,90,68.32a50,50,0,0,0-39.77-28A40.1,40.1,0,0,1,90,5ZM49.68,50.24a40,40,0,0,1,0,79.52A50.08,50.08,0,0,0,21.68,90,50.08,50.08,0,0,0,49.68,50.24Z\\"/>","rotated":"<path d=\\"M21.68,180a50,50,0,0,0,28-39.77A40.1,40.1,0,0,1,85.05,180H95a40.1,40.1,0,0,1,35.37-39.77,50,50,0,0,0,28,39.77H180v-4.95h0a40.09,40.09,0,0,1-39.76-35.37,50.08,50.08,0,0,0,39.76-28h0V68.32h0a50.08,50.08,0,0,0-39.76-28A40.09,40.09,0,0,1,180,5h0V0H158.32a50,50,0,0,0-28,39.77A40.1,40.1,0,0,1,95,0h-9.9A40.1,40.1,0,0,1,49.68,39.77,50,50,0,0,0,21.68,0H0V5H0A40.09,40.09,0,0,1,39.76,40.32,50.08,50.08,0,0,0,0,68.35v43.3a50.08,50.08,0,0,0,39.76,28A40.09,40.09,0,0,1,0,175.05H0V180ZM175.05,90a40.1,40.1,0,0,1-35.37,39.77,50,50,0,0,0-28-39.77,50,50,0,0,0,28-39.77A40.1,40.1,0,0,1,175.05,90ZM90,21.68a50.08,50.08,0,0,0,39.76,28,40,40,0,0,1-79.52,0A50.08,50.08,0,0,0,90,21.68ZM5,90A40.1,40.1,0,0,1,40.32,50.23,50,50,0,0,0,68.32,90a50,50,0,0,0-28,39.77A40.1,40.1,0,0,1,5,90Zm45.29,40.32a40,40,0,0,1,79.52,0,50.08,50.08,0,0,0-39.76,28A50.08,50.08,0,0,0,50.24,130.32Z\\"/>"},"inverted":{"default":"<path d=\\"M0,158.32V95a40.1,40.1,0,0,1,39.77,35.37A50,50,0,0,0,0,158.32Zm40.32-18.08A40.09,40.09,0,0,0,5,180H68.32A50.08,50.08,0,0,1,40.32,140.24Zm-.55-90.56A50,50,0,0,1,0,21.68V85.05A40.1,40.1,0,0,0,39.77,49.68Zm50.23,62a50,50,0,0,1-39.77,28,40,40,0,0,0,79.54,0A50,50,0,0,1,90,111.68Zm0-43.36a50,50,0,0,1,39.77-28,40,40,0,0,0-79.54,0A50,50,0,0,1,90,68.32ZM95,90a40.09,40.09,0,0,0,35.37,39.76,50.08,50.08,0,0,1,28-39.76,50.08,50.08,0,0,1-28-39.76A40.09,40.09,0,0,0,95,90ZM40.32,39.76A50.08,50.08,0,0,1,68.35,0H5A40.09,40.09,0,0,0,40.32,39.76ZM21.68,90a50.08,50.08,0,0,1,28,39.76,40,40,0,0,0,0-79.52A50.08,50.08,0,0,1,21.68,90Zm118-50.24A40.09,40.09,0,0,0,175.05,0h-63.4A50.08,50.08,0,0,1,139.68,39.76Zm.55,90.56a50,50,0,0,1,39.77,28V95A40.1,40.1,0,0,0,140.23,130.32Zm0-80.64A40.1,40.1,0,0,0,180,85.05V21.68A50,50,0,0,1,140.23,49.68Zm-.55,90.56a50.08,50.08,0,0,1-28,39.76h63.37A40.09,40.09,0,0,0,139.68,140.24Z\\"/>","rotated":"<path d=\\"M158.32,180H95a40.1,40.1,0,0,1,35.37-39.77A50,50,0,0,0,158.32,180Zm-18.08-40.32A40.09,40.09,0,0,0,180,175.05h0V111.68h0A50.08,50.08,0,0,1,140.24,139.68Zm-90.56.55a50,50,0,0,1-28,39.77H85.05A40.1,40.1,0,0,0,49.68,140.23Zm62-50.23a50,50,0,0,1,28,39.77,40,40,0,0,0,0-79.54A50,50,0,0,1,111.68,90ZM68.32,90a50,50,0,0,1-28-39.77,40,40,0,0,0,0,79.54A50,50,0,0,1,68.32,90Zm21.68-5a40.09,40.09,0,0,0,39.76-35.37A50.08,50.08,0,0,1,90,21.68a50.08,50.08,0,0,1-39.76,28A40.09,40.09,0,0,0,90,85.05ZM39.76,139.68A50.08,50.08,0,0,1,0,111.65v63.4H0A40.09,40.09,0,0,0,39.76,139.68ZM90,158.32a50.08,50.08,0,0,1,39.76-28,40,40,0,0,0-79.52,0A50.08,50.08,0,0,1,90,158.32Zm-50.24-118A40.09,40.09,0,0,0,0,5H0v63.4A50.08,50.08,0,0,1,39.76,40.32Zm90.56-.55A50,50,0,0,1,158.32,0H95A40.1,40.1,0,0,0,130.32,39.77Zm-80.64,0A40.1,40.1,0,0,0,85.05,0H21.68A50,50,0,0,1,49.68,39.77Zm90.56.55a50.08,50.08,0,0,1,39.76,28h0V5h0A40.09,40.09,0,0,0,140.24,40.32Z\\"/>"},"thumbnail":"<path d=\\"M24.81,40h0A11.14,11.14,0,0,0,31,31.16,8.91,8.91,0,0,1,38.9,40h0A8.91,8.91,0,0,1,31,48.84,11.13,11.13,0,0,0,24.81,40Zm4,9A11.14,11.14,0,0,0,20,55.18,11.14,11.14,0,0,0,11.16,49a8.9,8.9,0,0,1,17.68,0ZM20,38.9A8.91,8.91,0,0,1,11.16,31,11.14,11.14,0,0,0,20,24.82,11.14,11.14,0,0,0,28.84,31,8.91,8.91,0,0,1,20,38.9ZM31.16,29a8.9,8.9,0,0,1,17.68,0A11.14,11.14,0,0,0,40,35.18,11.14,11.14,0,0,0,31.16,29ZM40,44.82A11.14,11.14,0,0,0,48.84,51a8.9,8.9,0,0,1-17.68,0A11.14,11.14,0,0,0,40,44.82ZM41.1,40h0A8.91,8.91,0,0,1,49,31.16,11.14,11.14,0,0,0,55.18,40h0A11.13,11.13,0,0,0,49,48.84,8.91,8.91,0,0,1,41.1,40Zm10.06-9A11.14,11.14,0,0,0,60,24.82,11.14,11.14,0,0,0,68.84,31a8.9,8.9,0,0,1-17.68,0ZM60,41.1A8.91,8.91,0,0,1,68.84,49,11.14,11.14,0,0,0,60,55.18,11.14,11.14,0,0,0,51.16,49,8.91,8.91,0,0,1,60,41.1ZM64.81,40h0A11.14,11.14,0,0,0,71,31.16,8.91,8.91,0,0,1,78.9,40h0A8.91,8.91,0,0,1,71,48.84,11.13,11.13,0,0,0,64.81,40ZM75.18,20A11.14,11.14,0,0,0,69,28.84a8.9,8.9,0,0,1,0-17.68A11.14,11.14,0,0,0,75.18,20ZM60,1.1A8.91,8.91,0,0,1,68.84,9,11.14,11.14,0,0,0,60,15.18,11.14,11.14,0,0,0,51.16,9,8.91,8.91,0,0,1,60,1.1ZM51,11.16a8.9,8.9,0,0,1,0,17.68A11.14,11.14,0,0,0,44.82,20,11.14,11.14,0,0,0,51,11.16ZM40,4.82A11.14,11.14,0,0,0,48.84,11a8.9,8.9,0,0,1-17.68,0A11.14,11.14,0,0,0,40,4.82ZM35.18,20A11.14,11.14,0,0,0,29,28.84a8.9,8.9,0,0,1,0-17.68A11.14,11.14,0,0,0,35.18,20ZM20,1.1A8.91,8.91,0,0,1,28.84,9,11.14,11.14,0,0,0,20,15.18,11.14,11.14,0,0,0,11.16,9,8.91,8.91,0,0,1,20,1.1ZM4.82,20A11.14,11.14,0,0,0,11,11.16a8.9,8.9,0,0,1,0,17.68A11.14,11.14,0,0,0,4.82,20ZM1.1,40h0A8.91,8.91,0,0,1,9,31.16,11.14,11.14,0,0,0,15.18,40h0A11.13,11.13,0,0,0,9,48.84,8.91,8.91,0,0,1,1.1,40ZM80,0H78.9A8.91,8.91,0,0,1,71,8.84,11.13,11.13,0,0,0,64.81,0H55.19A11.13,11.13,0,0,0,49,8.84,8.91,8.91,0,0,1,41.1,0H38.9A8.91,8.91,0,0,1,31,8.84,11.13,11.13,0,0,0,24.81,0H15.19A11.13,11.13,0,0,0,9,8.84,8.91,8.91,0,0,1,1.1,0H0V4.82A11.14,11.14,0,0,0,8.84,11,8.91,8.91,0,0,1,0,18.9v2.2A8.91,8.91,0,0,1,8.84,29,11.14,11.14,0,0,0,0,35.18v9.64A11.14,11.14,0,0,0,8.84,51,8.91,8.91,0,0,1,0,58.9V60H4.82A11.14,11.14,0,0,0,11,51.16,8.91,8.91,0,0,1,18.9,60h2.2A8.91,8.91,0,0,1,29,51.16,11.14,11.14,0,0,0,35.18,60h9.64A11.14,11.14,0,0,0,51,51.16,8.91,8.91,0,0,1,58.9,60h2.2A8.91,8.91,0,0,1,69,51.16,11.14,11.14,0,0,0,75.18,60H80V58.9A8.91,8.91,0,0,1,71.16,51,11.14,11.14,0,0,0,80,44.82V35.18A11.14,11.14,0,0,0,71.16,29,8.91,8.91,0,0,1,80,21.1V18.9A8.91,8.91,0,0,1,71.16,11,11.14,11.14,0,0,0,80,4.82Z\\"/>"},"width":"180px","height":"180px","priority":1}'),d=JSON.parse('{"name":"pattern-example-2","label":"Pattern Example: Two","svgContent":{"regular":{"default":"<path d=\\"M48,0A48,48,0,0,1,96,48,48,48,0,0,1,48,0Zm0,0A48,48,0,0,0,0,48,48,48,0,0,0,48,0ZM96,48A48,48,0,0,0,48,96,48,48,0,0,0,96,48ZM0,48A48,48,0,0,0,48,96,48,48,0,0,0,0,48Z\\"/>","rotated":"<path d=\\"M48,0A48,48,0,0,1,96,48,48,48,0,0,1,48,0Zm0,0A48,48,0,0,0,0,48,48,48,0,0,0,48,0ZM96,48A48,48,0,0,0,48,96,48,48,0,0,0,96,48ZM0,48A48,48,0,0,0,48,96,48,48,0,0,0,0,48Z\\"/>"},"inverted":{"default":"<path d=\\"M96,48V96H48A48,48,0,0,0,96,48ZM0,48V96H48A48,48,0,0,1,0,48ZM48,0H0V48A48,48,0,0,1,48,0Zm0,0A48,48,0,0,1,0,48,48,48,0,0,1,48,96,48,48,0,0,1,96,48,48,48,0,0,1,48,0Zm0,0A48,48,0,0,1,96,48V0Z\\"/>","rotated":"<path d=\\"M96,48V96H48A48,48,0,0,0,96,48ZM0,48V96H48A48,48,0,0,1,0,48ZM48,0H0V48A48,48,0,0,1,48,0Zm0,0A48,48,0,0,1,0,48,48,48,0,0,1,48,96,48,48,0,0,1,96,48,48,48,0,0,1,48,0Zm0,0A48,48,0,0,1,96,48V0Z\\"/>"},"thumbnail":"<path d=\\"M10,0A10,10,0,0,1,20,10,10,10,0,0,1,10,0Zm0,0A10,10,0,0,0,0,10,10,10,0,0,0,10,0ZM20,10A10,10,0,0,0,10,20,10,10,0,0,0,20,10ZM0,10A10,10,0,0,0,10,20,10,10,0,0,0,0,10Zm40,0A10,10,0,0,0,30,0,10,10,0,0,0,40,10ZM30,0A10,10,0,0,0,20,10,10,10,0,0,0,30,0ZM40,10A10,10,0,0,0,30,20,10,10,0,0,0,40,10ZM20,10A10,10,0,0,0,30,20,10,10,0,0,0,20,10Zm40,0A10,10,0,0,0,50,0,10,10,0,0,0,60,10ZM50,0A10,10,0,0,0,40,10,10,10,0,0,0,50,0ZM60,10A10,10,0,0,0,50,20,10,10,0,0,0,60,10ZM40,10A10,10,0,0,0,50,20,10,10,0,0,0,40,10Zm40,0A10,10,0,0,0,70,0,10,10,0,0,0,80,10ZM70,0A10,10,0,0,0,60,10,10,10,0,0,0,70,0ZM80,10A10,10,0,0,0,70,20,10,10,0,0,0,80,10ZM60,10A10,10,0,0,0,70,20,10,10,0,0,0,60,10ZM20,30A10,10,0,0,0,10,20,10,10,0,0,0,20,30ZM10,20A10,10,0,0,0,0,30,10,10,0,0,0,10,20ZM20,30A10,10,0,0,0,10,40,10,10,0,0,0,20,30ZM0,30A10,10,0,0,0,10,40,10,10,0,0,0,0,30Zm40,0A10,10,0,0,0,30,20,10,10,0,0,0,40,30ZM30,20A10,10,0,0,0,20,30,10,10,0,0,0,30,20ZM40,30A10,10,0,0,0,30,40,10,10,0,0,0,40,30ZM20,30A10,10,0,0,0,30,40,10,10,0,0,0,20,30Zm40,0A10,10,0,0,0,50,20,10,10,0,0,0,60,30ZM50,20A10,10,0,0,0,40,30,10,10,0,0,0,50,20ZM60,30A10,10,0,0,0,50,40,10,10,0,0,0,60,30ZM40,30A10,10,0,0,0,50,40,10,10,0,0,0,40,30Zm40,0A10,10,0,0,0,70,20,10,10,0,0,0,80,30ZM70,20A10,10,0,0,0,60,30,10,10,0,0,0,70,20ZM80,30A10,10,0,0,0,70,40,10,10,0,0,0,80,30ZM60,30A10,10,0,0,0,70,40,10,10,0,0,0,60,30ZM20,50A10,10,0,0,0,10,40,10,10,0,0,0,20,50ZM10,40A10,10,0,0,0,0,50,10,10,0,0,0,10,40ZM20,50A10,10,0,0,0,10,60,10,10,0,0,0,20,50ZM0,50A10,10,0,0,0,10,60,10,10,0,0,0,0,50Zm40,0A10,10,0,0,0,30,40,10,10,0,0,0,40,50ZM30,40A10,10,0,0,0,20,50,10,10,0,0,0,30,40ZM40,50A10,10,0,0,0,30,60,10,10,0,0,0,40,50ZM20,50A10,10,0,0,0,30,60,10,10,0,0,0,20,50Zm40,0A10,10,0,0,0,50,40,10,10,0,0,0,60,50ZM50,40A10,10,0,0,0,40,50,10,10,0,0,0,50,40ZM60,50A10,10,0,0,0,50,60,10,10,0,0,0,60,50ZM40,50A10,10,0,0,0,50,60,10,10,0,0,0,40,50Zm40,0A10,10,0,0,0,70,40,10,10,0,0,0,80,50ZM70,40A10,10,0,0,0,60,50,10,10,0,0,0,70,40ZM80,50A10,10,0,0,0,70,60,10,10,0,0,0,80,50ZM60,50A10,10,0,0,0,70,60,10,10,0,0,0,60,50Z\\"/>"},"width":"96px","height":"96px"}');var r,c=function(t){var Z;return(0,a.values)(null!==(Z=null==t?void 0:t.default)&&void 0!==Z?Z:t)}(((r={})[p.name]=p,r[d.name]=d,r)),l=function(t,a,Z){if(Z||2===arguments.length)for(var A,M=0,e=a.length;M<e;M++)!A&&M in a||(A||(A=Array.prototype.slice.call(a,0,M)),A[M]=a[M]);return t.concat(A||Array.prototype.slice.call(a))};(0,t.addFilter)("divi.maskAndPatternLibrary.pattern","d5-extension-example-background-mask-pattern",(function(t){return t.length?l(l([],t,!0),c,!0):t}),10),(0,t.addFilter)("divi.maskAndPatternLibrary.mask","d5-extension-example-background-mask-pattern",(function(t){return t.length?l(l([],t,!0),e,!0):t}),10)})();