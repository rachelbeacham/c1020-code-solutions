select "categories"."name" as "category",
       count("films".*) as "total"
  from "actors" as "a"
  join "castMembers" using ("actorId")
  join "films" using ("filmId")
  join "filmCategory" using ("filmId")
  join "categories" using ("categoryId")
  where "a"."firstName" = 'Lisa'
group by "categories"."name";
