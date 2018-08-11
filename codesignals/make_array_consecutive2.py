def makeArrayConsecutive2(statues):
    sort_lst = sorted(statues)
    need_result = sort_lst[-1] - sort_lst[0] + 1
    cnt_lst = len(sort_lst)
    
    return need_result - cnt_lst
