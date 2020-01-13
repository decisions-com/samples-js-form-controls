// minimal type def for script loader for IDE help...
interface Window {
  __$DP_Scripts: string[];
}
declare namespace $DP {
  class ScriptLoader {
    static LoadScript(scriptUrl: string): JQueryPromise<any>;
  }
}
