function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "FactorialTask"};
	this.sidHashMap["FactorialTask"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "FactorialTask:20"};
	this.sidHashMap["FactorialTask:20"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "FactorialTask:27"};
	this.sidHashMap["FactorialTask:27"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<S3>"] = {sid: "FactorialTask:49"};
	this.sidHashMap["FactorialTask:49"] = {rtwname: "<S3>"};
	this.rtwnameHashMap["<S4>"] = {sid: "FactorialTask:1"};
	this.sidHashMap["FactorialTask:1"] = {rtwname: "<S4>"};
	this.rtwnameHashMap["<S5>"] = {sid: "FactorialTask:23"};
	this.sidHashMap["FactorialTask:23"] = {rtwname: "<S5>"};
	this.rtwnameHashMap["<S6>"] = {sid: "FactorialTask:33"};
	this.sidHashMap["FactorialTask:33"] = {rtwname: "<S6>"};
	this.rtwnameHashMap["<Root>/Input"] = {sid: "FactorialTask:32"};
	this.sidHashMap["FactorialTask:32"] = {rtwname: "<Root>/Input"};
	this.rtwnameHashMap["<Root>/Initial Condition"] = {sid: "FactorialTask:47"};
	this.sidHashMap["FactorialTask:47"] = {rtwname: "<Root>/Initial Condition"};
	this.rtwnameHashMap["<Root>/Facotrial_forloop"] = {sid: "FactorialTask:20"};
	this.sidHashMap["FactorialTask:20"] = {rtwname: "<Root>/Facotrial_forloop"};
	this.rtwnameHashMap["<Root>/Factorial_Matlabfunc"] = {sid: "FactorialTask:27"};
	this.sidHashMap["FactorialTask:27"] = {rtwname: "<Root>/Factorial_Matlabfunc"};
	this.rtwnameHashMap["<Root>/Factorial_Whilelloop"] = {sid: "FactorialTask:49"};
	this.sidHashMap["FactorialTask:49"] = {rtwname: "<Root>/Factorial_Whilelloop"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "FactorialTask:18"};
	this.sidHashMap["FactorialTask:18"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<Root>/y"] = {sid: "FactorialTask:26"};
	this.sidHashMap["FactorialTask:26"] = {rtwname: "<Root>/y"};
	this.rtwnameHashMap["<Root>/Out2"] = {sid: "FactorialTask:48"};
	this.sidHashMap["FactorialTask:48"] = {rtwname: "<Root>/Out2"};
	this.rtwnameHashMap["<S1>/In1"] = {sid: "FactorialTask:21"};
	this.sidHashMap["FactorialTask:21"] = {rtwname: "<S1>/In1"};
	this.rtwnameHashMap["<S1>/Display"] = {sid: "FactorialTask:12"};
	this.sidHashMap["FactorialTask:12"] = {rtwname: "<S1>/Display"};
	this.rtwnameHashMap["<S1>/For Iterator Subsystem"] = {sid: "FactorialTask:1"};
	this.sidHashMap["FactorialTask:1"] = {rtwname: "<S1>/For Iterator Subsystem"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "FactorialTask:22"};
	this.sidHashMap["FactorialTask:22"] = {rtwname: "<S1>/Out1"};
	this.rtwnameHashMap["<S2>/u"] = {sid: "FactorialTask:28"};
	this.sidHashMap["FactorialTask:28"] = {rtwname: "<S2>/u"};
	this.rtwnameHashMap["<S2>/MATLAB Function"] = {sid: "FactorialTask:23"};
	this.sidHashMap["FactorialTask:23"] = {rtwname: "<S2>/MATLAB Function"};
	this.rtwnameHashMap["<S2>/y"] = {sid: "FactorialTask:29"};
	this.sidHashMap["FactorialTask:29"] = {rtwname: "<S2>/y"};
	this.rtwnameHashMap["<S3>/Input"] = {sid: "FactorialTask:50"};
	this.sidHashMap["FactorialTask:50"] = {rtwname: "<S3>/Input"};
	this.rtwnameHashMap["<S3>/IC"] = {sid: "FactorialTask:51"};
	this.sidHashMap["FactorialTask:51"] = {rtwname: "<S3>/IC"};
	this.rtwnameHashMap["<S3>/While Iterator Subsystem"] = {sid: "FactorialTask:33"};
	this.sidHashMap["FactorialTask:33"] = {rtwname: "<S3>/While Iterator Subsystem"};
	this.rtwnameHashMap["<S3>/Out1"] = {sid: "FactorialTask:52"};
	this.sidHashMap["FactorialTask:52"] = {rtwname: "<S3>/Out1"};
	this.rtwnameHashMap["<S4>/In1"] = {sid: "FactorialTask:2"};
	this.sidHashMap["FactorialTask:2"] = {rtwname: "<S4>/In1"};
	this.rtwnameHashMap["<S4>/Display"] = {sid: "FactorialTask:13"};
	this.sidHashMap["FactorialTask:13"] = {rtwname: "<S4>/Display"};
	this.rtwnameHashMap["<S4>/Display1"] = {sid: "FactorialTask:17"};
	this.sidHashMap["FactorialTask:17"] = {rtwname: "<S4>/Display1"};
	this.rtwnameHashMap["<S4>/For Iterator"] = {sid: "FactorialTask:3"};
	this.sidHashMap["FactorialTask:3"] = {rtwname: "<S4>/For Iterator"};
	this.rtwnameHashMap["<S4>/Multiply"] = {sid: "FactorialTask:6"};
	this.sidHashMap["FactorialTask:6"] = {rtwname: "<S4>/Multiply"};
	this.rtwnameHashMap["<S4>/Unit Delay"] = {sid: "FactorialTask:10"};
	this.sidHashMap["FactorialTask:10"] = {rtwname: "<S4>/Unit Delay"};
	this.rtwnameHashMap["<S4>/Out1"] = {sid: "FactorialTask:4"};
	this.sidHashMap["FactorialTask:4"] = {rtwname: "<S4>/Out1"};
	this.rtwnameHashMap["<S5>:1"] = {sid: "FactorialTask:23:1"};
	this.sidHashMap["FactorialTask:23:1"] = {rtwname: "<S5>:1"};
	this.rtwnameHashMap["<S6>/Input"] = {sid: "FactorialTask:34"};
	this.sidHashMap["FactorialTask:34"] = {rtwname: "<S6>/Input"};
	this.rtwnameHashMap["<S6>/IC"] = {sid: "FactorialTask:35"};
	this.sidHashMap["FactorialTask:35"] = {rtwname: "<S6>/IC"};
	this.rtwnameHashMap["<S6>/Display"] = {sid: "FactorialTask:38"};
	this.sidHashMap["FactorialTask:38"] = {rtwname: "<S6>/Display"};
	this.rtwnameHashMap["<S6>/Display1"] = {sid: "FactorialTask:39"};
	this.sidHashMap["FactorialTask:39"] = {rtwname: "<S6>/Display1"};
	this.rtwnameHashMap["<S6>/Multiply"] = {sid: "FactorialTask:40"};
	this.sidHashMap["FactorialTask:40"] = {rtwname: "<S6>/Multiply"};
	this.rtwnameHashMap["<S6>/NotEqual"] = {sid: "FactorialTask:42"};
	this.sidHashMap["FactorialTask:42"] = {rtwname: "<S6>/NotEqual"};
	this.rtwnameHashMap["<S6>/Unit Delay"] = {sid: "FactorialTask:41"};
	this.sidHashMap["FactorialTask:41"] = {rtwname: "<S6>/Unit Delay"};
	this.rtwnameHashMap["<S6>/While Iterator"] = {sid: "FactorialTask:36"};
	this.sidHashMap["FactorialTask:36"] = {rtwname: "<S6>/While Iterator"};
	this.rtwnameHashMap["<S6>/Out1"] = {sid: "FactorialTask:37"};
	this.sidHashMap["FactorialTask:37"] = {rtwname: "<S6>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
