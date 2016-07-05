var searchIndex = {};
searchIndex["argparse"] = {"doc":"","items":[[3,"StoreTrue","argparse","",null,null],[3,"StoreFalse","","",null,null],[3,"StoreConst","","",null,null],[12,"0","","",0,null],[3,"PushConst","","",null,null],[12,"0","","",1,null],[3,"Store","","",null,null],[3,"Parse","","",null,null],[3,"StoreOption","","",null,null],[3,"ParseOption","","",null,null],[3,"List","","",null,null],[3,"ParseList","","",null,null],[3,"Collect","","",null,null],[3,"ParseCollect","","",null,null],[3,"Print","","Print string and exit with status 0",null,null],[12,"0","","",2,null],[3,"IncrBy","","",null,null],[12,"0","","",3,null],[3,"DecrBy","","",null,null],[12,"0","","",4,null],[0,"action","","",null,null],[4,"ParseResult","argparse::action","",null,null],[13,"Parsed","","",5,null],[13,"Help","","",5,null],[13,"Exit","","",5,null],[13,"Error","","",5,null],[4,"Action","","",null,null],[13,"Flag","","",6,null],[13,"Single","","",6,null],[13,"Push","","",6,null],[13,"Many","","",6,null],[8,"TypedAction","","",null,null],[10,"bind","","",7,{"inputs":[{"name":"typedaction"},{"name":"rc"}],"output":{"name":"action"}}],[8,"IFlagAction","","",null,null],[10,"parse_flag","","",8,{"inputs":[{"name":"iflagaction"}],"output":{"name":"parseresult"}}],[8,"IArgAction","","",null,null],[10,"parse_arg","","",9,{"inputs":[{"name":"iargaction"},{"name":"str"}],"output":{"name":"parseresult"}}],[8,"IArgsAction","","",null,null],[10,"parse_args","","",10,null],[0,"parser","argparse","",null,null],[3,"Var","argparse::parser","",null,null],[3,"Ref","","",null,null],[3,"ArgumentParser","","The main argument parser class",null,null],[11,"hash","","",11,{"inputs":[{"name":"var"},{"name":"h"}],"output":null}],[11,"eq","","",11,{"inputs":[{"name":"var"},{"name":"var"}],"output":{"name":"bool"}}],[11,"add_option","","",12,null],[11,"add_argument","","",12,{"inputs":[{"name":"ref"},{"name":"str"},{"name":"a"},{"name":"str"}],"output":{"name":"ref"}}],[11,"metavar","","",12,{"inputs":[{"name":"ref"},{"name":"str"}],"output":{"name":"ref"}}],[11,"required","","",12,{"inputs":[{"name":"ref"}],"output":{"name":"ref"}}],[11,"envvar","","",12,{"inputs":[{"name":"ref"},{"name":"str"}],"output":{"name":"ref"}}],[11,"new","","Create an empty argument parser",13,{"inputs":[],"output":{"name":"argumentparser"}}],[11,"refer","","Borrow mutable variable for an argument",13,{"inputs":[{"name":"argumentparser"},{"name":"t"}],"output":{"name":"box"}}],[11,"add_option","","Add option to argument parser",13,null],[11,"set_description","","Set description of the command",13,{"inputs":[{"name":"argumentparser"},{"name":"str"}],"output":null}],[11,"print_help","","Print help",13,{"inputs":[{"name":"argumentparser"},{"name":"str"},{"name":"write"}],"output":{"name":"ioresult"}}],[11,"print_usage","","Print usage",13,{"inputs":[{"name":"argumentparser"},{"name":"str"},{"name":"write"}],"output":{"name":"ioresult"}}],[11,"parse","","Parse arguments",13,{"inputs":[{"name":"argumentparser"},{"name":"vec"},{"name":"write"},{"name":"write"}],"output":{"name":"result"}}],[11,"error","","Write an error similar to one produced by the library itself",13,{"inputs":[{"name":"argumentparser"},{"name":"str"},{"name":"str"},{"name":"write"}],"output":null}],[11,"stop_on_first_argument","","Configure parser to ignore options when first non-option argument is\nencountered.",13,{"inputs":[{"name":"argumentparser"},{"name":"bool"}],"output":null}],[11,"silence_double_dash","","Do not put double-dash (bare `--`) into argument",13,{"inputs":[{"name":"argumentparser"},{"name":"bool"}],"output":null}],[11,"parse_args","","Convenience method to parse arguments",13,{"inputs":[{"name":"argumentparser"}],"output":{"name":"result"}}],[11,"parse_args_or_exit","","The simplest conveninece method",13,{"inputs":[{"name":"argumentparser"}],"output":null}],[11,"bind","argparse","",0,{"inputs":[{"name":"storeconst"},{"name":"rc"}],"output":{"name":"action"}}],[11,"bind","","",1,{"inputs":[{"name":"pushconst"},{"name":"rc"}],"output":{"name":"action"}}],[11,"bind","","",14,{"inputs":[{"name":"store"},{"name":"rc"}],"output":{"name":"action"}}],[11,"bind","","",15,{"inputs":[{"name":"storeoption"},{"name":"rc"}],"output":{"name":"action"}}],[11,"bind","","",16,{"inputs":[{"name":"list"},{"name":"rc"}],"output":{"name":"action"}}],[11,"bind","","",17,{"inputs":[{"name":"collect"},{"name":"rc"}],"output":{"name":"action"}}],[11,"bind","","",18,{"inputs":[{"name":"parse"},{"name":"rc"}],"output":{"name":"action"}}],[11,"bind","","",19,{"inputs":[{"name":"parseoption"},{"name":"rc"}],"output":{"name":"action"}}],[11,"bind","","",20,{"inputs":[{"name":"parselist"},{"name":"rc"}],"output":{"name":"action"}}],[11,"bind","","",21,{"inputs":[{"name":"parsecollect"},{"name":"rc"}],"output":{"name":"action"}}],[11,"parse_flag","","",2,{"inputs":[{"name":"print"}],"output":{"name":"parseresult"}}],[11,"bind","","",22,{"inputs":[{"name":"storetrue"},{"name":"rc"}],"output":{"name":"action"}}],[11,"bind","","",23,{"inputs":[{"name":"storefalse"},{"name":"rc"}],"output":{"name":"action"}}],[11,"bind","","",3,{"inputs":[{"name":"incrby"},{"name":"rc"}],"output":{"name":"action"}}],[11,"bind","","",4,{"inputs":[{"name":"decrby"},{"name":"rc"}],"output":{"name":"action"}}],[11,"from_argument","std::path","",24,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"from_argument","collections::string","",25,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"from_argument","std::net::ip","",26,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"from_argument","","",27,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"from_argument","std::net::addr","",28,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[8,"FromCommandLine","argparse","",null,null],[10,"from_argument","","",29,{"inputs":[{"name":"str"}],"output":{"name":"result"}}]],"paths":[[3,"StoreConst"],[3,"PushConst"],[3,"Print"],[3,"IncrBy"],[3,"DecrBy"],[4,"ParseResult"],[4,"Action"],[8,"TypedAction"],[8,"IFlagAction"],[8,"IArgAction"],[8,"IArgsAction"],[3,"Var"],[3,"Ref"],[3,"ArgumentParser"],[3,"Store"],[3,"StoreOption"],[3,"List"],[3,"Collect"],[3,"Parse"],[3,"ParseOption"],[3,"ParseList"],[3,"ParseCollect"],[3,"StoreTrue"],[3,"StoreFalse"],[3,"PathBuf"],[3,"String"],[3,"Ipv4Addr"],[3,"Ipv6Addr"],[4,"SocketAddr"],[8,"FromCommandLine"]]};
initSearch(searchIndex);
