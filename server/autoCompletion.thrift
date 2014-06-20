namespace cpp AutoCompletion

exception QueryException
{
	1:string msg,
}

service AutoCompletionService
{
  string query(1:string prefix) throws (1:QueryException qe),
}
