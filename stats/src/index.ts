import {MatchReader} from "./MatchReader";
import {Summary} from "./Summary";



const matchReader =  MatchReader.fromCsv('original.csv');
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport('Chelsea');

summary.buildAndPrintReport(matchReader.matches);



