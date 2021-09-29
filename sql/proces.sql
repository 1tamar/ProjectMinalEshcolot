
use MinalEshcolot


--declare   @type  int
--set @type =2

--select * from [dbo].[USERS]
--where [USR_ID] =@type



create proc procFindRoom
@type int,
@tonnage int,
@floor int
as
select * from [dbo].[ROOMS]
where [ROOM_TYPE] =@type and [ROOM_TONNAGE]>= @tonnage and [ROOM_FLOOR]<=@floor


exec procFindRoom 2 ,100 ,0




create proc



