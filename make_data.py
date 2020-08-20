# %%
#create a dictionary of gene to desc
#from the gff file
import pandas as pd
def make_desc(_GFF):
    gff =pd.read_csv( _GFF, sep='\t', header=None, comment='#')
    
    gff = gff[gff.iloc[:,2]=='mRNA']
    #print( gff[gff[gff.columns[-1]].str.contains('Tb427_020006200')] )
    desc = {}
    for n in gff.iloc[:,-1]:
        #print (n)
        n=n.replace('%2C',' ')
        item_list = n.split(';')
        #print (item_list)
        temp_dict = {}
        for m in item_list:
            #print(m)
            temp_dict[m.split('=')[0].strip()]=m.split('=')[1].strip()
        #print(temp_dict['ID'])
        #print(temp_dict['description'])
        temp_id = temp_dict['ID']
        
        if ':' in temp_dict['ID']:
            temp_dict['ID']=temp_dict['ID'].split(':')[0]
        if temp_dict['ID'].count('.') >2:
            temp_dict['ID'] = '.'.join(temp_dict['ID'].split('.')[0:3])
        desc[temp_dict['ID']]=temp_dict.get('description','none').replace(',',' ')
    return desc
import csv
text = open('html_box.txt').read()
desc_dict = make_desc('TriTrypDB-46_TbruceiTREU927.gff')
desc_dict['Tb10.v4.0073']
df = pd.DataFrame()
df['Gene_Id']=desc_dict.keys()
df['Gene_desc']=desc_dict.values()
df['Box']=[text.replace('{gene_id}',gene_id) for gene_id in desc_dict.keys()]
df.to_csv('intable.csv',index=False,quoting=csv.QUOTE_NONE, quotechar="",  escapechar="\\",sep='\t')
# %%



# %%
start = pd.read_csv('turnover_in.tsv',sep='\t')
complex_df = pd.read_csv('indata_complex.tsv',sep='\t',index_col=[0])

# %%
complex_df.head()

# %%
merge = pd.concat([start,complex_df]).reset_index(drop=True).fillna(0)
#merge.describe()
# %%
merge.head()

# %%
merge.to_csv('indata.tsv',index=False,sep='\t')
# %%
start.head()

# %%
