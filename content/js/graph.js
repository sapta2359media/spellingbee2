/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 35.0, "minX": 0.0, "maxY": 76777.0, "series": [{"data": [[0.0, 35.0], [0.1, 35.0], [0.2, 35.0], [0.3, 36.0], [0.4, 36.0], [0.5, 36.0], [0.6, 37.0], [0.7, 37.0], [0.8, 37.0], [0.9, 37.0], [1.0, 37.0], [1.1, 37.0], [1.2, 37.0], [1.3, 37.0], [1.4, 37.0], [1.5, 37.0], [1.6, 37.0], [1.7, 37.0], [1.8, 37.0], [1.9, 37.0], [2.0, 37.0], [2.1, 37.0], [2.2, 37.0], [2.3, 37.0], [2.4, 37.0], [2.5, 37.0], [2.6, 37.0], [2.7, 37.0], [2.8, 37.0], [2.9, 37.0], [3.0, 37.0], [3.1, 37.0], [3.2, 37.0], [3.3, 37.0], [3.4, 37.0], [3.5, 37.0], [3.6, 37.0], [3.7, 37.0], [3.8, 37.0], [3.9, 37.0], [4.0, 37.0], [4.1, 37.0], [4.2, 37.0], [4.3, 37.0], [4.4, 37.0], [4.5, 37.0], [4.6, 37.0], [4.7, 37.0], [4.8, 37.0], [4.9, 38.0], [5.0, 38.0], [5.1, 38.0], [5.2, 38.0], [5.3, 38.0], [5.4, 38.0], [5.5, 38.0], [5.6, 38.0], [5.7, 38.0], [5.8, 38.0], [5.9, 38.0], [6.0, 38.0], [6.1, 38.0], [6.2, 38.0], [6.3, 38.0], [6.4, 38.0], [6.5, 38.0], [6.6, 38.0], [6.7, 38.0], [6.8, 38.0], [6.9, 38.0], [7.0, 38.0], [7.1, 38.0], [7.2, 38.0], [7.3, 38.0], [7.4, 38.0], [7.5, 38.0], [7.6, 38.0], [7.7, 38.0], [7.8, 38.0], [7.9, 38.0], [8.0, 38.0], [8.1, 38.0], [8.2, 38.0], [8.3, 38.0], [8.4, 38.0], [8.5, 38.0], [8.6, 38.0], [8.7, 38.0], [8.8, 38.0], [8.9, 38.0], [9.0, 38.0], [9.1, 38.0], [9.2, 38.0], [9.3, 38.0], [9.4, 38.0], [9.5, 38.0], [9.6, 38.0], [9.7, 38.0], [9.8, 38.0], [9.9, 38.0], [10.0, 38.0], [10.1, 38.0], [10.2, 38.0], [10.3, 38.0], [10.4, 38.0], [10.5, 38.0], [10.6, 38.0], [10.7, 38.0], [10.8, 39.0], [10.9, 39.0], [11.0, 39.0], [11.1, 39.0], [11.2, 39.0], [11.3, 39.0], [11.4, 39.0], [11.5, 39.0], [11.6, 39.0], [11.7, 39.0], [11.8, 39.0], [11.9, 39.0], [12.0, 39.0], [12.1, 39.0], [12.2, 39.0], [12.3, 39.0], [12.4, 39.0], [12.5, 39.0], [12.6, 39.0], [12.7, 39.0], [12.8, 39.0], [12.9, 39.0], [13.0, 39.0], [13.1, 39.0], [13.2, 39.0], [13.3, 39.0], [13.4, 39.0], [13.5, 39.0], [13.6, 39.0], [13.7, 39.0], [13.8, 39.0], [13.9, 39.0], [14.0, 39.0], [14.1, 39.0], [14.2, 39.0], [14.3, 39.0], [14.4, 39.0], [14.5, 39.0], [14.6, 39.0], [14.7, 39.0], [14.8, 39.0], [14.9, 39.0], [15.0, 39.0], [15.1, 39.0], [15.2, 39.0], [15.3, 39.0], [15.4, 39.0], [15.5, 39.0], [15.6, 39.0], [15.7, 39.0], [15.8, 39.0], [15.9, 39.0], [16.0, 39.0], [16.1, 39.0], [16.2, 39.0], [16.3, 39.0], [16.4, 39.0], [16.5, 39.0], [16.6, 39.0], [16.7, 39.0], [16.8, 39.0], [16.9, 39.0], [17.0, 39.0], [17.1, 39.0], [17.2, 39.0], [17.3, 39.0], [17.4, 39.0], [17.5, 39.0], [17.6, 39.0], [17.7, 39.0], [17.8, 40.0], [17.9, 40.0], [18.0, 40.0], [18.1, 40.0], [18.2, 40.0], [18.3, 40.0], [18.4, 40.0], [18.5, 40.0], [18.6, 40.0], [18.7, 40.0], [18.8, 40.0], [18.9, 40.0], [19.0, 40.0], [19.1, 40.0], [19.2, 40.0], [19.3, 40.0], [19.4, 40.0], [19.5, 40.0], [19.6, 40.0], [19.7, 40.0], [19.8, 40.0], [19.9, 40.0], [20.0, 40.0], [20.1, 40.0], [20.2, 40.0], [20.3, 40.0], [20.4, 40.0], [20.5, 40.0], [20.6, 40.0], [20.7, 40.0], [20.8, 40.0], [20.9, 40.0], [21.0, 40.0], [21.1, 40.0], [21.2, 40.0], [21.3, 40.0], [21.4, 40.0], [21.5, 40.0], [21.6, 40.0], [21.7, 40.0], [21.8, 41.0], [21.9, 41.0], [22.0, 41.0], [22.1, 41.0], [22.2, 41.0], [22.3, 41.0], [22.4, 41.0], [22.5, 41.0], [22.6, 41.0], [22.7, 41.0], [22.8, 41.0], [22.9, 41.0], [23.0, 41.0], [23.1, 41.0], [23.2, 41.0], [23.3, 41.0], [23.4, 41.0], [23.5, 41.0], [23.6, 41.0], [23.7, 41.0], [23.8, 41.0], [23.9, 41.0], [24.0, 41.0], [24.1, 41.0], [24.2, 41.0], [24.3, 41.0], [24.4, 41.0], [24.5, 41.0], [24.6, 41.0], [24.7, 41.0], [24.8, 41.0], [24.9, 41.0], [25.0, 41.0], [25.1, 41.0], [25.2, 41.0], [25.3, 41.0], [25.4, 41.0], [25.5, 41.0], [25.6, 41.0], [25.7, 41.0], [25.8, 41.0], [25.9, 41.0], [26.0, 41.0], [26.1, 41.0], [26.2, 41.0], [26.3, 41.0], [26.4, 41.0], [26.5, 42.0], [26.6, 42.0], [26.7, 42.0], [26.8, 42.0], [26.9, 42.0], [27.0, 42.0], [27.1, 42.0], [27.2, 42.0], [27.3, 42.0], [27.4, 42.0], [27.5, 42.0], [27.6, 42.0], [27.7, 42.0], [27.8, 42.0], [27.9, 42.0], [28.0, 42.0], [28.1, 42.0], [28.2, 42.0], [28.3, 42.0], [28.4, 42.0], [28.5, 42.0], [28.6, 42.0], [28.7, 42.0], [28.8, 42.0], [28.9, 42.0], [29.0, 42.0], [29.1, 42.0], [29.2, 42.0], [29.3, 42.0], [29.4, 42.0], [29.5, 42.0], [29.6, 42.0], [29.7, 42.0], [29.8, 42.0], [29.9, 42.0], [30.0, 42.0], [30.1, 42.0], [30.2, 43.0], [30.3, 43.0], [30.4, 43.0], [30.5, 43.0], [30.6, 43.0], [30.7, 43.0], [30.8, 43.0], [30.9, 43.0], [31.0, 43.0], [31.1, 43.0], [31.2, 43.0], [31.3, 43.0], [31.4, 43.0], [31.5, 43.0], [31.6, 43.0], [31.7, 43.0], [31.8, 43.0], [31.9, 43.0], [32.0, 43.0], [32.1, 43.0], [32.2, 43.0], [32.3, 43.0], [32.4, 43.0], [32.5, 43.0], [32.6, 43.0], [32.7, 43.0], [32.8, 43.0], [32.9, 43.0], [33.0, 43.0], [33.1, 43.0], [33.2, 43.0], [33.3, 43.0], [33.4, 43.0], [33.5, 43.0], [33.6, 43.0], [33.7, 43.0], [33.8, 43.0], [33.9, 43.0], [34.0, 43.0], [34.1, 43.0], [34.2, 43.0], [34.3, 44.0], [34.4, 44.0], [34.5, 44.0], [34.6, 44.0], [34.7, 44.0], [34.8, 44.0], [34.9, 44.0], [35.0, 44.0], [35.1, 44.0], [35.2, 44.0], [35.3, 44.0], [35.4, 44.0], [35.5, 44.0], [35.6, 44.0], [35.7, 44.0], [35.8, 44.0], [35.9, 45.0], [36.0, 45.0], [36.1, 45.0], [36.2, 45.0], [36.3, 45.0], [36.4, 45.0], [36.5, 45.0], [36.6, 45.0], [36.7, 45.0], [36.8, 45.0], [36.9, 45.0], [37.0, 45.0], [37.1, 45.0], [37.2, 45.0], [37.3, 45.0], [37.4, 45.0], [37.5, 45.0], [37.6, 46.0], [37.7, 46.0], [37.8, 46.0], [37.9, 46.0], [38.0, 46.0], [38.1, 46.0], [38.2, 46.0], [38.3, 46.0], [38.4, 46.0], [38.5, 46.0], [38.6, 46.0], [38.7, 46.0], [38.8, 46.0], [38.9, 46.0], [39.0, 46.0], [39.1, 46.0], [39.2, 46.0], [39.3, 47.0], [39.4, 47.0], [39.5, 47.0], [39.6, 47.0], [39.7, 47.0], [39.8, 47.0], [39.9, 47.0], [40.0, 47.0], [40.1, 47.0], [40.2, 47.0], [40.3, 47.0], [40.4, 47.0], [40.5, 47.0], [40.6, 47.0], [40.7, 48.0], [40.8, 48.0], [40.9, 48.0], [41.0, 48.0], [41.1, 48.0], [41.2, 48.0], [41.3, 48.0], [41.4, 49.0], [41.5, 49.0], [41.6, 49.0], [41.7, 49.0], [41.8, 49.0], [41.9, 50.0], [42.0, 50.0], [42.1, 50.0], [42.2, 50.0], [42.3, 50.0], [42.4, 50.0], [42.5, 50.0], [42.6, 50.0], [42.7, 50.0], [42.8, 50.0], [42.9, 50.0], [43.0, 50.0], [43.1, 50.0], [43.2, 51.0], [43.3, 51.0], [43.4, 51.0], [43.5, 51.0], [43.6, 51.0], [43.7, 51.0], [43.8, 51.0], [43.9, 51.0], [44.0, 51.0], [44.1, 51.0], [44.2, 51.0], [44.3, 51.0], [44.4, 51.0], [44.5, 52.0], [44.6, 52.0], [44.7, 52.0], [44.8, 52.0], [44.9, 52.0], [45.0, 52.0], [45.1, 52.0], [45.2, 52.0], [45.3, 52.0], [45.4, 53.0], [45.5, 53.0], [45.6, 53.0], [45.7, 53.0], [45.8, 53.0], [45.9, 53.0], [46.0, 53.0], [46.1, 53.0], [46.2, 53.0], [46.3, 54.0], [46.4, 54.0], [46.5, 54.0], [46.6, 54.0], [46.7, 54.0], [46.8, 54.0], [46.9, 54.0], [47.0, 55.0], [47.1, 55.0], [47.2, 55.0], [47.3, 55.0], [47.4, 55.0], [47.5, 55.0], [47.6, 55.0], [47.7, 56.0], [47.8, 56.0], [47.9, 56.0], [48.0, 56.0], [48.1, 56.0], [48.2, 57.0], [48.3, 57.0], [48.4, 57.0], [48.5, 57.0], [48.6, 57.0], [48.7, 57.0], [48.8, 57.0], [48.9, 57.0], [49.0, 57.0], [49.1, 57.0], [49.2, 58.0], [49.3, 58.0], [49.4, 59.0], [49.5, 59.0], [49.6, 59.0], [49.7, 59.0], [49.8, 60.0], [49.9, 60.0], [50.0, 61.0], [50.1, 61.0], [50.2, 61.0], [50.3, 62.0], [50.4, 62.0], [50.5, 62.0], [50.6, 62.0], [50.7, 62.0], [50.8, 62.0], [50.9, 63.0], [51.0, 63.0], [51.1, 63.0], [51.2, 64.0], [51.3, 64.0], [51.4, 64.0], [51.5, 65.0], [51.6, 65.0], [51.7, 66.0], [51.8, 66.0], [51.9, 66.0], [52.0, 66.0], [52.1, 66.0], [52.2, 67.0], [52.3, 67.0], [52.4, 68.0], [52.5, 68.0], [52.6, 68.0], [52.7, 68.0], [52.8, 69.0], [52.9, 69.0], [53.0, 69.0], [53.1, 69.0], [53.2, 70.0], [53.3, 70.0], [53.4, 70.0], [53.5, 71.0], [53.6, 71.0], [53.7, 71.0], [53.8, 72.0], [53.9, 73.0], [54.0, 73.0], [54.1, 73.0], [54.2, 74.0], [54.3, 74.0], [54.4, 74.0], [54.5, 74.0], [54.6, 74.0], [54.7, 74.0], [54.8, 75.0], [54.9, 77.0], [55.0, 78.0], [55.1, 78.0], [55.2, 78.0], [55.3, 78.0], [55.4, 78.0], [55.5, 80.0], [55.6, 81.0], [55.7, 82.0], [55.8, 83.0], [55.9, 85.0], [56.0, 85.0], [56.1, 85.0], [56.2, 86.0], [56.3, 89.0], [56.4, 90.0], [56.5, 90.0], [56.6, 93.0], [56.7, 93.0], [56.8, 96.0], [56.9, 96.0], [57.0, 96.0], [57.1, 97.0], [57.2, 99.0], [57.3, 99.0], [57.4, 99.0], [57.5, 99.0], [57.6, 101.0], [57.7, 102.0], [57.8, 102.0], [57.9, 103.0], [58.0, 103.0], [58.1, 104.0], [58.2, 106.0], [58.3, 106.0], [58.4, 107.0], [58.5, 108.0], [58.6, 110.0], [58.7, 112.0], [58.8, 113.0], [58.9, 113.0], [59.0, 113.0], [59.1, 114.0], [59.2, 114.0], [59.3, 115.0], [59.4, 116.0], [59.5, 117.0], [59.6, 117.0], [59.7, 118.0], [59.8, 118.0], [59.9, 118.0], [60.0, 118.0], [60.1, 118.0], [60.2, 119.0], [60.3, 119.0], [60.4, 119.0], [60.5, 120.0], [60.6, 120.0], [60.7, 120.0], [60.8, 120.0], [60.9, 120.0], [61.0, 120.0], [61.1, 120.0], [61.2, 120.0], [61.3, 121.0], [61.4, 121.0], [61.5, 121.0], [61.6, 121.0], [61.7, 121.0], [61.8, 121.0], [61.9, 121.0], [62.0, 121.0], [62.1, 122.0], [62.2, 122.0], [62.3, 122.0], [62.4, 122.0], [62.5, 123.0], [62.6, 123.0], [62.7, 123.0], [62.8, 123.0], [62.9, 123.0], [63.0, 123.0], [63.1, 123.0], [63.2, 125.0], [63.3, 125.0], [63.4, 126.0], [63.5, 126.0], [63.6, 126.0], [63.7, 126.0], [63.8, 127.0], [63.9, 127.0], [64.0, 127.0], [64.1, 127.0], [64.2, 127.0], [64.3, 127.0], [64.4, 127.0], [64.5, 127.0], [64.6, 128.0], [64.7, 129.0], [64.8, 130.0], [64.9, 130.0], [65.0, 130.0], [65.1, 130.0], [65.2, 130.0], [65.3, 130.0], [65.4, 130.0], [65.5, 130.0], [65.6, 132.0], [65.7, 132.0], [65.8, 132.0], [65.9, 132.0], [66.0, 132.0], [66.1, 132.0], [66.2, 133.0], [66.3, 134.0], [66.4, 134.0], [66.5, 134.0], [66.6, 134.0], [66.7, 134.0], [66.8, 136.0], [66.9, 136.0], [67.0, 136.0], [67.1, 137.0], [67.2, 137.0], [67.3, 137.0], [67.4, 138.0], [67.5, 138.0], [67.6, 138.0], [67.7, 138.0], [67.8, 138.0], [67.9, 138.0], [68.0, 138.0], [68.1, 138.0], [68.2, 139.0], [68.3, 139.0], [68.4, 141.0], [68.5, 141.0], [68.6, 141.0], [68.7, 142.0], [68.8, 142.0], [68.9, 142.0], [69.0, 142.0], [69.1, 143.0], [69.2, 143.0], [69.3, 143.0], [69.4, 143.0], [69.5, 144.0], [69.6, 144.0], [69.7, 144.0], [69.8, 144.0], [69.9, 145.0], [70.0, 145.0], [70.1, 145.0], [70.2, 145.0], [70.3, 145.0], [70.4, 146.0], [70.5, 147.0], [70.6, 148.0], [70.7, 148.0], [70.8, 148.0], [70.9, 148.0], [71.0, 148.0], [71.1, 149.0], [71.2, 149.0], [71.3, 149.0], [71.4, 149.0], [71.5, 149.0], [71.6, 150.0], [71.7, 150.0], [71.8, 150.0], [71.9, 150.0], [72.0, 150.0], [72.1, 152.0], [72.2, 152.0], [72.3, 153.0], [72.4, 154.0], [72.5, 154.0], [72.6, 155.0], [72.7, 155.0], [72.8, 156.0], [72.9, 158.0], [73.0, 158.0], [73.1, 158.0], [73.2, 158.0], [73.3, 159.0], [73.4, 160.0], [73.5, 160.0], [73.6, 161.0], [73.7, 161.0], [73.8, 162.0], [73.9, 165.0], [74.0, 165.0], [74.1, 168.0], [74.2, 170.0], [74.3, 170.0], [74.4, 170.0], [74.5, 174.0], [74.6, 176.0], [74.7, 176.0], [74.8, 177.0], [74.9, 179.0], [75.0, 179.0], [75.1, 180.0], [75.2, 180.0], [75.3, 183.0], [75.4, 183.0], [75.5, 183.0], [75.6, 184.0], [75.7, 185.0], [75.8, 185.0], [75.9, 187.0], [76.0, 187.0], [76.1, 188.0], [76.2, 190.0], [76.3, 190.0], [76.4, 191.0], [76.5, 194.0], [76.6, 195.0], [76.7, 196.0], [76.8, 198.0], [76.9, 198.0], [77.0, 198.0], [77.1, 201.0], [77.2, 201.0], [77.3, 201.0], [77.4, 204.0], [77.5, 206.0], [77.6, 206.0], [77.7, 206.0], [77.8, 207.0], [77.9, 207.0], [78.0, 207.0], [78.1, 209.0], [78.2, 210.0], [78.3, 214.0], [78.4, 215.0], [78.5, 216.0], [78.6, 216.0], [78.7, 216.0], [78.8, 216.0], [78.9, 217.0], [79.0, 217.0], [79.1, 218.0], [79.2, 219.0], [79.3, 219.0], [79.4, 219.0], [79.5, 220.0], [79.6, 221.0], [79.7, 222.0], [79.8, 222.0], [79.9, 222.0], [80.0, 222.0], [80.1, 224.0], [80.2, 224.0], [80.3, 227.0], [80.4, 227.0], [80.5, 227.0], [80.6, 227.0], [80.7, 228.0], [80.8, 229.0], [80.9, 229.0], [81.0, 229.0], [81.1, 231.0], [81.2, 231.0], [81.3, 232.0], [81.4, 232.0], [81.5, 232.0], [81.6, 233.0], [81.7, 233.0], [81.8, 233.0], [81.9, 234.0], [82.0, 234.0], [82.1, 236.0], [82.2, 237.0], [82.3, 238.0], [82.4, 239.0], [82.5, 241.0], [82.6, 242.0], [82.7, 243.0], [82.8, 244.0], [82.9, 247.0], [83.0, 247.0], [83.1, 247.0], [83.2, 249.0], [83.3, 249.0], [83.4, 250.0], [83.5, 251.0], [83.6, 251.0], [83.7, 251.0], [83.8, 252.0], [83.9, 252.0], [84.0, 252.0], [84.1, 253.0], [84.2, 254.0], [84.3, 255.0], [84.4, 257.0], [84.5, 258.0], [84.6, 261.0], [84.7, 262.0], [84.8, 264.0], [84.9, 267.0], [85.0, 267.0], [85.1, 267.0], [85.2, 268.0], [85.3, 269.0], [85.4, 270.0], [85.5, 272.0], [85.6, 282.0], [85.7, 283.0], [85.8, 284.0], [85.9, 286.0], [86.0, 286.0], [86.1, 287.0], [86.2, 292.0], [86.3, 292.0], [86.4, 292.0], [86.5, 296.0], [86.6, 298.0], [86.7, 299.0], [86.8, 303.0], [86.9, 306.0], [87.0, 306.0], [87.1, 307.0], [87.2, 309.0], [87.3, 313.0], [87.4, 314.0], [87.5, 317.0], [87.6, 319.0], [87.7, 319.0], [87.8, 319.0], [87.9, 321.0], [88.0, 321.0], [88.1, 321.0], [88.2, 323.0], [88.3, 324.0], [88.4, 324.0], [88.5, 325.0], [88.6, 326.0], [88.7, 327.0], [88.8, 327.0], [88.9, 328.0], [89.0, 328.0], [89.1, 328.0], [89.2, 333.0], [89.3, 333.0], [89.4, 335.0], [89.5, 335.0], [89.6, 337.0], [89.7, 337.0], [89.8, 338.0], [89.9, 338.0], [90.0, 338.0], [90.1, 339.0], [90.2, 339.0], [90.3, 340.0], [90.4, 341.0], [90.5, 341.0], [90.6, 342.0], [90.7, 342.0], [90.8, 342.0], [90.9, 343.0], [91.0, 343.0], [91.1, 343.0], [91.2, 343.0], [91.3, 345.0], [91.4, 346.0], [91.5, 347.0], [91.6, 347.0], [91.7, 349.0], [91.8, 349.0], [91.9, 350.0], [92.0, 350.0], [92.1, 350.0], [92.2, 352.0], [92.3, 353.0], [92.4, 354.0], [92.5, 356.0], [92.6, 367.0], [92.7, 369.0], [92.8, 369.0], [92.9, 374.0], [93.0, 374.0], [93.1, 375.0], [93.2, 378.0], [93.3, 379.0], [93.4, 379.0], [93.5, 380.0], [93.6, 399.0], [93.7, 414.0], [93.8, 433.0], [93.9, 477.0], [94.0, 477.0], [94.1, 481.0], [94.2, 503.0], [94.3, 515.0], [94.4, 518.0], [94.5, 527.0], [94.6, 541.0], [94.7, 590.0], [94.8, 686.0], [94.9, 877.0], [95.0, 877.0], [95.1, 1145.0], [95.2, 1160.0], [95.3, 1160.0], [95.4, 1175.0], [95.5, 1184.0], [95.6, 1208.0], [95.7, 1209.0], [95.8, 1214.0], [95.9, 1269.0], [96.0, 1269.0], [96.1, 1350.0], [96.2, 1386.0], [96.3, 1386.0], [96.4, 19301.0], [96.5, 19309.0], [96.6, 19398.0], [96.7, 19435.0], [96.8, 19458.0], [96.9, 19492.0], [97.0, 19492.0], [97.1, 19530.0], [97.2, 19772.0], [97.3, 19844.0], [97.4, 19849.0], [97.5, 19854.0], [97.6, 19883.0], [97.7, 19887.0], [97.8, 19897.0], [97.9, 19909.0], [98.0, 19909.0], [98.1, 19932.0], [98.2, 19933.0], [98.3, 19934.0], [98.4, 19990.0], [98.5, 19991.0], [98.6, 20040.0], [98.7, 20088.0], [98.8, 20112.0], [98.9, 35693.0], [99.0, 35693.0], [99.1, 35695.0], [99.2, 35889.0], [99.3, 35950.0], [99.4, 36327.0], [99.5, 36359.0], [99.6, 36421.0], [99.7, 36599.0], [99.8, 36722.0], [99.9, 76777.0], [100.0, 76777.0]], "isOverall": false, "label": "2359project", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 518.0, "series": [{"data": [[0.0, 518.0], [600.0, 1.0], [800.0, 1.0], [1100.0, 5.0], [1200.0, 4.0], [19400.0, 3.0], [19300.0, 3.0], [20000.0, 2.0], [19900.0, 6.0], [20100.0, 1.0], [19800.0, 6.0], [19700.0, 1.0], [19500.0, 1.0], [1300.0, 3.0], [100.0, 175.0], [36700.0, 1.0], [36400.0, 1.0], [36500.0, 1.0], [36300.0, 2.0], [35900.0, 1.0], [35600.0, 2.0], [35800.0, 1.0], [200.0, 88.0], [300.0, 62.0], [76700.0, 1.0], [400.0, 4.0], [500.0, 6.0]], "isOverall": false, "label": "2359project", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 76700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 847.0, "series": [{"data": [[0.0, 847.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 20.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 32.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.67652456E12, "maxY": 14.814285714285717, "series": [{"data": [[1.67652468E12, 1.0], [1.67652456E12, 8.987421383647801], [1.67652462E12, 14.814285714285717]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67652468E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 165.8, "minX": 1.0, "maxY": 3471.333333333333, "series": [{"data": [[8.0, 3471.333333333333], [2.0, 526.1379310344828], [9.0, 1164.5652173913043], [10.0, 870.0000000000001], [11.0, 771.4137931034484], [3.0, 1058.4324324324323], [12.0, 591.5581395348836], [13.0, 1415.327868852459], [14.0, 813.7857142857141], [15.0, 1234.6470588235295], [4.0, 1384.6071428571431], [1.0, 2947.7407407407413], [16.0, 1123.6530612244899], [17.0, 726.3469387755099], [18.0, 1127.9333333333336], [19.0, 2511.208333333333], [5.0, 1063.27027027027], [20.0, 165.8], [21.0, 213.60000000000002], [6.0, 863.7307692307693], [7.0, 1393.6000000000001]], "isOverall": false, "label": "2359project", "isController": false}, {"data": [[11.679999999999998, 1077.752222222222]], "isOverall": false, "label": "2359project-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 21.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 13.6, "minX": 1.67652456E12, "maxY": 7828.85, "series": [{"data": [[1.67652468E12, 78.41666666666667], [1.67652456E12, 7828.85], [1.67652462E12, 6893.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.67652468E12, 13.6], [1.67652456E12, 3243.6], [1.67652462E12, 2856.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67652468E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 222.4821802935012, "minX": 1.67652456E12, "maxY": 25701.0, "series": [{"data": [[1.67652468E12, 25701.0], [1.67652456E12, 222.4821802935012], [1.67652462E12, 1873.2142857142865]], "isOverall": false, "label": "2359project", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67652468E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 108.66666666666666, "minX": 1.67652456E12, "maxY": 1873.190476190477, "series": [{"data": [[1.67652468E12, 108.66666666666666], [1.67652456E12, 222.40041928721175], [1.67652462E12, 1873.190476190477]], "isOverall": false, "label": "2359project", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67652468E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 147.71907756813405, "minX": 1.67652456E12, "maxY": 25669.666666666664, "series": [{"data": [[1.67652468E12, 25669.666666666664], [1.67652456E12, 147.71907756813405], [1.67652462E12, 1804.5642857142857]], "isOverall": false, "label": "2359project", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67652468E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 35.0, "minX": 1.67652456E12, "maxY": 36722.0, "series": [{"data": [[1.67652468E12, 283.0], [1.67652456E12, 20088.0], [1.67652462E12, 36722.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.67652468E12, 43.0], [1.67652456E12, 35.0], [1.67652462E12, 35.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.67652468E12, 283.0], [1.67652456E12, 317.4], [1.67652462E12, 365.9000000000004]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.67652468E12, 283.0], [1.67652456E12, 1357.919999999999], [1.67652462E12, 36352.28]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.67652468E12, 163.0], [1.67652456E12, 61.0], [1.67652462E12, 60.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.67652468E12, 283.0], [1.67652456E12, 374.09999999999997], [1.67652462E12, 19848.75]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67652468E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 44.5, "minX": 3.0, "maxY": 76777.0, "series": [{"data": [[8.0, 151.5], [9.0, 72.0], [10.0, 62.0], [11.0, 80.0], [12.0, 49.0], [3.0, 52.5], [13.0, 89.5], [14.0, 56.5], [15.0, 51.0], [16.0, 57.0], [4.0, 44.5], [17.0, 55.0], [18.0, 54.0], [20.0, 84.0], [21.0, 54.5], [22.0, 75.0], [6.0, 51.5], [24.0, 58.0], [29.0, 146.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[3.0, 76777.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 3.0, "maxY": 151.5, "series": [{"data": [[8.0, 151.5], [9.0, 72.0], [10.0, 62.0], [11.0, 80.0], [12.0, 49.0], [3.0, 52.5], [13.0, 89.5], [14.0, 56.5], [15.0, 50.0], [16.0, 57.0], [4.0, 44.5], [17.0, 55.0], [18.0, 54.0], [20.0, 84.0], [21.0, 54.0], [22.0, 74.5], [6.0, 51.5], [24.0, 58.0], [29.0, 146.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[3.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.67652456E12, "maxY": 8.233333333333333, "series": [{"data": [[1.67652468E12, 0.03333333333333333], [1.67652456E12, 8.233333333333333], [1.67652462E12, 6.733333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67652468E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.67652456E12, "maxY": 7.95, "series": [{"data": [[1.67652468E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}, {"data": [[1.67652468E12, 0.03333333333333333], [1.67652456E12, 7.95], [1.67652462E12, 7.0]], "isOverall": false, "label": "206", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67652468E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.67652456E12, "maxY": 7.95, "series": [{"data": [[1.67652468E12, 0.03333333333333333], [1.67652456E12, 7.95], [1.67652462E12, 7.0]], "isOverall": false, "label": "2359project-success", "isController": false}, {"data": [[1.67652468E12, 0.016666666666666666]], "isOverall": false, "label": "2359project-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67652468E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.67652456E12, "maxY": 7.95, "series": [{"data": [[1.67652468E12, 0.03333333333333333], [1.67652456E12, 7.95], [1.67652462E12, 7.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.67652468E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67652468E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

