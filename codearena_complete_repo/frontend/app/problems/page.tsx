
const problems=[
{title:"Two Sum",difficulty:"Easy"},
{title:"Binary Tree Paths",difficulty:"Medium"},
{title:"Merge K Lists",difficulty:"Hard"}
]

export default function Problems(){
return(
<div style={{padding:40}}>
<h1>Problems</h1>
{problems.map((p,i)=>(
<div key={i}>
{p.title} - {p.difficulty}
</div>
))}
</div>
)
}
